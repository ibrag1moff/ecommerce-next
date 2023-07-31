import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <BeatLoader size={25} color="#000" />
        </div>
    );
};

export default Loading;
