import React from 'react';
import { FadeLoader } from 'react-spinners';

function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FadeLoader
        color="#0071E3"
        height={15}
        width={5}
        radius={2}
        margin={3}
      />
    </div>
  );
}

export default Loader;
