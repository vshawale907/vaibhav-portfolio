import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Solidity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Ethereum', logo: 'https://cdn.worldvectorlogo.com/logos/ethereum-1.svg' },
];

// Fibonacci sphere distribution for even spacing
const fibonacciSphere = (count: number, radius: number): THREE.Vector3[] => {
    const points: THREE.Vector3[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < count; i++) {
        const theta = Math.acos(1 - (2 * (i + 0.5)) / count);
        const phi = (2 * Math.PI * i) / goldenRatio;
        points.push(new THREE.Vector3(
            radius * Math.sin(theta) * Math.cos(phi),
            radius * Math.cos(theta),
            radius * Math.sin(theta) * Math.sin(phi)
        ));
    }
    return points;
};

const positions = fibonacciSphere(skills.length, 2.8);

const OrbitGroup = () => {
    const groupRef = useRef<THREE.Group>(null!);
    const mouseX = useRef(0);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = t * 0.18;
            groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.12;
        }
    });

    return (
        <group
            ref={groupRef}
            onPointerMove={e => { mouseX.current = e.point.x; }}
        >
            {skills.map((skill, i) => (
                <group key={i} position={positions[i]}>
                    <Html
                        center
                        distanceFactor={6}
                        style={{ userSelect: 'none', pointerEvents: 'auto' }}
                    >
                        <div
                            className="flex flex-col items-center bg-[#1A1A1A]/80 backdrop-blur-md border border-[#ff6600]/20 rounded-xl p-2 w-16 h-16 justify-center gap-1 hover:border-[#ff6600]/70 hover:scale-125 transition-all duration-200 cursor-pointer shadow-lg"
                            style={{ boxShadow: '0 0 0 rgba(255,102,0,0)' }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 16px rgba(255,102,0,0.3)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 rgba(255,102,0,0)';
                            }}
                        >
                            <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
                            <span className="text-[9px] text-gray-300 font-medium text-center leading-tight">{skill.name}</span>
                        </div>
                    </Html>
                </group>
            ))}
        </group>
    );
};

const SkillsOrbit = () => {
    return (
        <div className="w-full" style={{ height: '520px' }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 55 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    autoRotate={false}
                    dampingFactor={0.08}
                    enableDamping
                />
                <OrbitGroup />
            </Canvas>
        </div>
    );
};

export default SkillsOrbit;
