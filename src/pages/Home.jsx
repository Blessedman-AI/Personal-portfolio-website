import { Suspense, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
// import { Loader1, Loader2 } from '../components/Loader';
import { Html, useProgress } from '@react-three/drei';

import Island from '../models/Island';
import Sky from '../models/Sky';
// import Bird from '../models/Bird';
import Plane from '../models/Plane';
import { HomeInfoMobile, HomeInfo } from '../components/HomeInfo';
import passenger from '../assets/passenger.mp3';
// import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import { Triangle } from 'react-loader-spinner';

const Home = ({ modelLoad }) => {
  const isMobile = window.innerWidth < 1080;
  const audioRef = useRef(new Audio(passenger));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;
  let [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  window.innerWidth < 768 ? (isRotating = true) : false;

  // useEffect(() => {
  //   if (isHomePage) {
  //     document.body.addEventListener(
  //       'touchmove',
  //       function (event) {
  //         event.preventDefault();
  //       },
  //       { passive: false }
  //     ); // Use passive: false for touch devices
  //   } else {
  //     document.body.removeEventListener('touchmove', {
  //       passive: false
  //     });
  //   }
  // }, [isHomePage]);

  // console.log(isHomePage);
  // console.log(location.pathname);

  // const { progress } = useProgress(); // Access progress from useProgress
  const shouldShowTriangle = modelLoad < 100;

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      // screenScale = [0.9, 0.9, 0.9];
      screenScale = [0.6, 0.6, 0.6];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      // screenScale = [1.5, 1.5, 1.5];
      screenScale = [0.8, 0.8, 0.8];
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div>;
      // screenPosition = [0, -1.5, 0];
      screenPosition = [0, -1.2, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  if (isHomePage) {
    return (
      <div
        onTouchMove={event => event.preventDefault()}
        className="w-full h-screen relative"
      >
        <section>
          <div className="flex items-center justify-center">
            {shouldShowTriangle && (
              <div className="loaderContainer flex items-center justify-center ">
                <Triangle />
              </div>
            )}
          </div>
          <div
            className={`w-full h-screen overflow-hidden relative ${
              modelLoad === 100 ? '' : 'hide'
            }`}
          >
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
              {/* {isMobile ? (
            <HomeInfoMobile />
          ) : (
            <HomeInfo currentStage={currentStage} />
          )} */}
              <HomeInfo currentStage={currentStage} />
            </div>
            <Canvas
              className={`w-full h-screen bg-transparent ${
                isRotating ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense>
                <directionalLight
                  position={[1, 1, 1]}
                  intensity={2}
                />
                <ambientLight intensity={0.5} />
                <hemisphereLight
                  skyColor="#b1e1ff"
                  groundColor="#000000"
                  intensity={1}
                />

                {/* <Bird /> */}
                <Sky isRotating={isRotating} />
                <Island
                  position={islandPosition}
                  scale={islandScale}
                  rotation={islandRotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                  setCurrentStage={setCurrentStage}
                />
                <Plane
                  isRotating={isRotating}
                  scale={planeScale}
                  position={planePosition}
                  rotation={[0, 20, 0]}
                />
              </Suspense>
            </Canvas>

            <div className="absolute bottom-2 left-2">
              <img
                src={!isPlayingMusic ? soundoff : soundon}
                alt="jukebox"
                onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                className="w-10 h-10 cursor-pointer object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }

  // return (
  //   <section className="w-full h-screen overflow-hidden relative">
  //     <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  //       {isMobile ? (
  //         <HomeInfoMobile />
  //       ) : (
  //         <HomeInfo currentStage={currentStage} />
  //       )}
  //     </div>
  //     <Canvas
  //       className={`w-full h-screen bg-transparent ${
  //         isRotating ? 'cursor-grabbing' : 'cursor-grab'
  //       }`}
  //       camera={{ near: 0.1, far: 1000 }}
  //     >
  //       <Suspense>
  //         <directionalLight position={[1, 1, 1]} intensity={2} />
  //         <ambientLight intensity={0.5} />
  //         <hemisphereLight
  //           skyColor="#b1e1ff"
  //           groundColor="#000000"
  //           intensity={1}
  //         />

  //         {/* <Bird /> */}
  //         <Sky isRotating={isRotating} />
  //         <Island
  //           position={islandPosition}
  //           scale={islandScale}
  //           rotation={islandRotation}
  //           isRotating={isRotating}
  //           setIsRotating={setIsRotating}
  //           setCurrentStage={setCurrentStage}
  //         />
  //         <Plane
  //           isRotating={isRotating}
  //           scale={planeScale}
  //           position={planePosition}
  //           rotation={[0, 20, 0]}
  //         />
  //       </Suspense>
  //     </Canvas>

  //     <div className="absolute bottom-2 left-2">
  //       <img
  //         src={!isPlayingMusic ? soundoff : soundon}
  //         alt="jukebox"
  //         onClick={() => setIsPlayingMusic(!isPlayingMusic)}
  //         className="w-10 h-10 cursor-pointer object-contain"
  //       />
  //     </div>
  //   </section>
  // );
};

export default Home;
