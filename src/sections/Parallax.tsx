import { useEffect, useRef, useState } from "react";

type viewProps = {
  scrollPosition: number;
};
const Parallax = ({ scrollPosition }: viewProps) => {
  const scene = useRef<HTMLDivElement>(null); // Ref for the scene element
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(window.innerHeight);

  const generateSky = (scale:number, color:string) => (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <polygon
        points="10,12 20,8 30,10 35,7 45,9 50,12 40,15"
        fill={color}
        opacity="0.6"
      />
      <polygon
        points="5,16 15,12 25,15 30,13 40,16 45,18 35,19"
        fill={color}
        opacity="0.4"
      />
      <polygon
        points="60,9 70,6 80,8 85,5 95,7 90,10 80,12"
        fill={color}
        opacity="0.5"
      />
      <polygon
        points="55,13 65,10 75,13 80,11 90,14 85,16 75,18"
        fill={color}
        opacity="0.3"
      />
    </svg>
  );

  const generateMountain = (scale:number, color:string) => (
    <svg
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <rect width="100" height="35" fill={color} y="19" />
      <polygon points="0,10 50,2 100,20 0,20" fill={color} />
      <polygon points="25,20 75,7 100,10 100,20" fill={color} />
    </svg>
  );

  const generateDesert = (scale:number, color:string) => (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <rect width="100" height="25" fill={color} y="14" />
      <path
        d="M0 10 C 10 8, 20 12, 30 10 C 40 8, 50 12, 60 10 C 70 8, 80 12, 90 10 C 100 8, 100 15, 100 15 L 0 15 Z"
        fill={color}
      />
    </svg>
  );

  const generateGrass = (scale:number, color:string) => (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <rect width="100" height="25" fill={color} y="10" />
      <path
        d="M0 5 C 5 3, 10 7, 15 5 C 20 3, 25 7, 30 5 C 35 3, 40 7, 45 5 C 50 3, 55 7, 60 5 C 65 3, 70 7, 75 5 C 80 3, 85 7, 90 5 C 95 3, 100 5, 100 10 L 0 10 Z"
        fill={color}
      />
    </svg>
  );

  const numLayers = 30;
  const layers = Array.from({ length: numLayers }, (_, i) => {
    const layerType =
      i < 5
        ? generateSky
        : i < 12
        ? generateMountain
        : i < 20
        ? generateDesert
        : generateGrass;
    // const layerType = generateSky;
    const z = -1 * (i + 1);
    const scale = 1 + i * 0.02;
    // const offset = contentHeight * 0.38;
    const offset = i * ((contentHeight * 2) / numLayers) - contentHeight * 0.5;
    const speed = (numLayers - i) * 0.05; // Speed factor for parallax
    let color;
    if (i < 5) {
      const skyStart = [233, 233, 233]; // #87CEEB
      const skyEnd = [135, 206, 235];
      const r = skyStart[0] + (skyEnd[0] - skyStart[0]) * (i / 4);
      const g = skyStart[1] + (skyEnd[1] - skyStart[1]) * (i / 4);
      const b = skyStart[2] + (skyEnd[2] - skyStart[2]) * (i / 4);
      color = `rgb(${r}, ${g}, ${b})`;
    } else if (i < 12) {
      const mountainStart = [160, 82, 45]; // #A0522D
      const mountainEnd = [101, 67, 33]; // #654321
      const r =
        mountainStart[0] + (mountainEnd[0] - mountainStart[0]) * ((i - 5) / 6);
      const g =
        mountainStart[1] + (mountainEnd[1] - mountainStart[1]) * ((i - 5) / 6);
      const b =
        mountainStart[2] + (mountainEnd[2] - mountainStart[2]) * ((i - 5) / 6);
      color = `rgb(${r}, ${g}, ${b})`;
    } else if (i < 20) {
      const desertStart = [244, 164, 96]; // #F4A460
      const desertEnd = [218, 165, 32]; // #DAA520
      const r =
        desertStart[0] + (desertEnd[0] - desertStart[0]) * ((i - 12) / 7);
      const g =
        desertStart[1] + (desertEnd[1] - desertStart[1]) * ((i - 12) / 7);
      const b =
        desertStart[2] + (desertEnd[2] - desertStart[2]) * ((i - 12) / 7);
      color = `rgb(${r}, ${g}, ${b})`;
    } else {
      const grassStart = [46, 192, 72]; // #90EE90
      const grassEnd = [0, 128, 0]; // #008000
      const r = grassStart[0] + (grassEnd[0] - grassStart[0]) * ((i - 20) / 9);
      const g = grassStart[1] + (grassEnd[1] - grassStart[1]) * ((i - 20) / 9);
      const b = grassStart[2] + (grassEnd[2] - grassStart[2]) * ((i - 20) / 9);
      color = `rgb(${r}, ${g}, ${b})`;
    }
    return { render: layerType, z, scale, offset, speed, color };
  });

  return (
    <div
      className="h-[100vh] overflow-hidden perspective-[1px] transform-style-preserve-3d font-sans"
      ref={scene}
      style={{ backgroundColor: "#87CEEB" }}
    >
      <div className="relative h-[100vh] transform-style-preserve-3d">
        {layers.map((layer, index) => {
          const parallaxOffset = scrollPosition * layer.speed; // Calculate parallax offset
          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full transform-style-preserve-3d overflow-hidden"
              style={{
                transform: `translateZ(${layer.z}px) scale(${
                  layer.scale
                }) translateY(${layer.offset + parallaxOffset}px)`,
              }}
            >
              <div>{layer.render(layer.scale, layer.color)} </div>
            </div>
          );
        })}
      </div>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="text-4xl font-bold">Welcome to Mongolia</h1>
        <p>
          {scrollPosition} : {contentHeight}
        </p>
        <p className="mt-4">Explore the vast landscapes and nomadic culture.</p>
      </div> */}
    </div>
  );
};

export default Parallax;
