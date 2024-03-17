

const Heading = ({ title, sideTitle ,  subTitle }) => {
    return (
        <div className="text-center my-10 lg:my-20 uppercase">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-white">{title} <span className="text-red-700 ">{sideTitle}</span></h1>
            <p className="text-neutral-400 my-3">{subTitle}</p>
        </div>
    );
};

export default Heading;