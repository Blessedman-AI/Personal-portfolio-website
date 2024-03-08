import { useState, useEffect } from 'react';
import { Html, useProgress } from '@react-three/drei';
import App from '../App';
import { Triangle } from 'react-loader-spinner';

export const LoaderContact = () => {
  return (
    <Html>
      <div>
        <Triangle />
      </div>
    </Html>
  );
};

// import { Html, useProgress } from '@react-three/drei';
// import { useState, useRef } from 'react';
// import { Triangle } from 'react-loader-spinner';

// export const Loader1 = () => {
//   return (
//     <Html>
//       <div className="loader-container relative flex justify-center  m-auto items-center">
//         <div
//           className="absolute w-20 h-20 border-2 border-opacity-20
//        border-blue-500 border-t-blue-500 rounded-full animate-spin"
//         />
//       </div>
//     </Html>
//   );
// };

// export const Loader2 = () => {
//   const { progress } = useProgress();
//   modelLoad = progress;
//   return <Html center>{progress} </Html>;
// };
