import { useEffect, useRef, useState, useMemo } from "react";
import { Color } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

extend({ ThreeGlobe: ThreeGlobe });

const cameraZ = 280;

// Empty countries data - minimal processing
const countries = { features: [] };

export function Globe({ globeConfig, data }) {
  const globeRef = useRef(null);
  const groupRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  // Memoize props to prevent recreation
  const memoizedConfig = useMemo(() => ({
    pointSize: globeConfig.pointSize || 6,
    atmosphereColor: globeConfig.atmosphereColor || "#ffffff",
    showAtmosphere: globeConfig.showAtmosphere ?? true,
    atmosphereAltitude: globeConfig.atmosphereAltitude || 0.5,
    polygonColor: globeConfig.polygonColor || "rgba(255,255,255,0.7)",
    globeColor: globeConfig.globeColor || "#1d072e",
    emissive: globeConfig.emissive || "#000000",
    emissiveIntensity: globeConfig.emissiveIntensity || 0.3,
    shininess: globeConfig.shininess || 0.9,
  }), [
    globeConfig.pointSize,
    globeConfig.atmosphereColor,
    globeConfig.showAtmosphere,
    globeConfig.atmosphereAltitude,
    globeConfig.polygonColor,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
    globeConfig.shininess,
  ]);

  // Pre-calculate filtered points ONCE
  const filteredPoints = useMemo(() => {
    if (!data) return [];

    const pointsMap = new Map();

    data.forEach(arc => {
      const startKey = `${arc.startLat},${arc.startLng}`;
      const endKey = `${arc.endLat},${arc.endLng}`;

      if (!pointsMap.has(startKey)) {
        pointsMap.set(startKey, {
          size: memoizedConfig.pointSize,
          color: arc.color,
          lat: arc.startLat,
          lng: arc.startLng,
        });
      }

      if (!pointsMap.has(endKey)) {
        pointsMap.set(endKey, {
          size: memoizedConfig.pointSize,
          color: arc.color,
          lat: arc.endLat,
          lng: arc.endLng,
        });
      }
    });

    return Array.from(pointsMap.values());
  }, [data, memoizedConfig.pointSize]);

  // Initialize globe ONCE
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe({ animateIn: false });
      groupRef.current.add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  // Set material ONCE
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(memoizedConfig.globeColor);
    globeMaterial.emissive = new Color(memoizedConfig.emissive);
    globeMaterial.emissiveIntensity = memoizedConfig.emissiveIntensity;
    globeMaterial.shininess = memoizedConfig.shininess;
  }, [isInitialized, memoizedConfig.globeColor, memoizedConfig.emissive, memoizedConfig.emissiveIntensity, memoizedConfig.shininess]);

  // Build data ONCE when initialized
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    // Minimal hex polygons - lower resolution for performance
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(2) // Lower resolution = faster
      .hexPolygonMargin(0.6)
      .showAtmosphere(memoizedConfig.showAtmosphere)
      .atmosphereColor(memoizedConfig.atmosphereColor)
      .atmosphereAltitude(memoizedConfig.atmosphereAltitude)
      .hexPolygonColor(() => memoizedConfig.polygonColor);

    // Static arcs - no dash animation
    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => d.startLat)
      .arcStartLng((d) => d.startLng)
      .arcEndLat((d) => d.endLat)
      .arcEndLng((d) => d.endLng)
      .arcColor((e) => e.color)
      .arcAltitude((e) => e.arcAlt)
      .arcStroke(0.3)
      .arcDashLength(0.8)
      .arcDashGap(0)
      .arcDashAnimateTime(0); // No animation

    // Points
    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((e) => e.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(1.5);

    // No rings
    globeRef.current.ringsData([]);
  }, [isInitialized, data, filteredPoints, memoizedConfig]);

  return <group ref={groupRef} />;
}

export function World(props) {
  const { globeConfig } = props;

  return (
    <Canvas gl={{ antialias: false, powerPreference: "high-performance" }}>
      {/* Use R3F's PerspectiveCamera component */}
      <PerspectiveCamera
        makeDefault
        position={[0, 0, cameraZ]}
        fov={50}
        near={180}
        far={1800}
      />

      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={[-400, 100, 400]}
        intensity={0.5}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={[-200, 500, 200]}
        intensity={0.4}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={[-200, 500, 200]}
        intensity={0.1}
      />

      <Globe {...props} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate={true}
        enableDamping={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export default function LightweightGlobe() {
  // Memoize config to prevent recreation
  const globeConfig = useMemo(() => ({
    pointSize: 9,
    globeColor: "#052473",
    showAtmosphere: true,
    atmosphereColor: "#5a87fa",
    atmosphereAltitude: 0.4,
    emissive: "#031f66",
    emissiveIntensity: 0.3,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#5a87fa",
    directionalTopLight: "#5a87fa",
    pointLight: "#5a87fa",
  }), []);

  // Memoize arc data
  const colors = useMemo(() => ["#06b6d4", "#3b82f6", "#6366f1"], []);

  const sampleArcs = useMemo(() => [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[2] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[0] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[1] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[0] },
  ], [colors]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden mt-20 py-20">
      <div className="text-center mb-8 relative z-40">
        <h1 className="md:text-4xl leading-10 text-2xl font-bold text-[#ffff09] habibi uppercase">
          <span className="text-blue-400  font-extrabold">Join</span> the Movement to Learn & Grow
        </h1>
        <p className="text-base md:text-lg font-normal text-neutral-200 font-mono max-w-md mt-2 mx-auto">
          This globe is interactive and customizable. Enjoy exploring! 
        </p>
        <div className="flex gap-10 text-white items-center justify-center my-20 z-40">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold font-mono">20+</h1>
            <h1>Free Courses</h1>
          </div>
          <div>
           <h1 className="text-3xl md:text-5xl font-bold font-mono">6</h1>
            <h1>Platforms</h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold font-mono">40+</h1>
            <h1>Users</h1>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute w-full bottom-0 inset-x-0 h-80 bg-gradient-to-b pointer-events-none select-none from-transparent via-black to-black z-40" />

      {/* FULL WIDTH GLOBE HERE */}
      <div className="absolute inset-0 w-full h-full z-10">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );


}