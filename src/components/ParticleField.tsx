import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const COLS = 120;
const ROWS = 80;
const COUNT = COLS * ROWS;
const SPACING = 0.28;
const PUSH_RADIUS = 2.2;
const WAVE_AMPLITUDE = 0.22;
const SPRING = 0.06;
const DAMPING = 0.82;

interface ParticleSystemProps {
    mouse: React.MutableRefObject<[number, number]>;
}

const ParticleSystem = ({ mouse }: ParticleSystemProps) => {
    const { viewport } = useThree();
    const pointsRef = useRef<THREE.Points>(null!);

    // Store original positions and velocities in refs (no React state = no re-renders)
    const origins = useMemo(() => {
        const arr = new Float32Array(COUNT * 3);
        let i = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                arr[i++] = (c - COLS / 2) * SPACING;
                arr[i++] = (r - ROWS / 2) * SPACING;
                arr[i++] = 0;
            }
        }
        return arr;
    }, []);

    const positions = useMemo(() => new Float32Array(origins), [origins]);
    const velocities = useMemo(() => new Float32Array(COUNT * 3), []);
    const phases = useMemo(() => {
        const arr = new Float32Array(COUNT);
        for (let i = 0; i < COUNT; i++) arr[i] = Math.random() * Math.PI * 2;
        return arr;
    }, []);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        // Map normalised mouse [-1,1] → world units
        const mx = (mouse.current[0] / window.innerWidth * 2 - 1) * (viewport.width / 2);
        const my = -(mouse.current[1] / window.innerHeight * 2 - 1) * (viewport.height / 2);

        for (let i = 0; i < COUNT; i++) {
            const i3 = i * 3;
            const ox = origins[i3];
            const oy = origins[i3 + 1];

            // Breathing wave
            const wave = Math.sin(t * 0.8 + phases[i]) * WAVE_AMPLITUDE;

            // Mouse push
            const dx = positions[i3] - mx;
            const dy = positions[i3 + 1] - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let pushX = 0;
            let pushY = 0;
            if (dist < PUSH_RADIUS && dist > 0.01) {
                const force = (1 - dist / PUSH_RADIUS) * 0.06;
                pushX = (dx / dist) * force;
                pushY = (dy / dist) * force;
            }

            // Spring back to origin
            velocities[i3] = (velocities[i3] + (ox - positions[i3]) * SPRING + pushX) * DAMPING;
            velocities[i3 + 1] = (velocities[i3 + 1] + (oy - positions[i3 + 1]) * SPRING + pushY) * DAMPING;

            positions[i3] += velocities[i3];
            positions[i3 + 1] += velocities[i3 + 1];
            positions[i3 + 2] = wave;
        }

        if (pointsRef.current) {
            const geo = pointsRef.current.geometry as THREE.BufferGeometry;
            (geo.attributes.position as THREE.BufferAttribute).array = positions;
            geo.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color="#ff6600"
                transparent
                opacity={0.55}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
};

const ParticleField = () => {
    const mouse = useRef<[number, number]>([0, 0]);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouse.current = [e.clientX, e.clientY];
    };

    return (
        <div
            className="absolute z-0 pointer-events-none"
            onMouseMove={handleMouseMove}
            style={{ 
                pointerEvents: 'all',
                top: '-10%',
                left: '50%',
                transform: 'translate(-50%, 0)',
                width: '100vw',
                height: '120vh'
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ParticleSystem mouse={mouse} />
            </Canvas>
        </div>
    );
};

export default ParticleField;
