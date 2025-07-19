import React from "react";
import Loader from "./Loader";

const FullScreenLoader: React.FC = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Loader />
    </div>
  );
};

export default FullScreenLoader;
