import { PiFanFill } from "react-icons/pi";

const Loading = () => {


    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            <PiFanFill className="animate-spin text-red-600 text-5xl lg:text-7xl" />
        </div>
    );
};

export default Loading;