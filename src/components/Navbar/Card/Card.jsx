import { Link } from "react-router-dom";

const Card = ({ service }) => {
    const { id, name, image, price, description } = service
    return (
        <div className="relative text-center flex flex-col justify-center items-center gap-4 p-6 h-full">
            <div className="avatar">
                <div className="w-60 mask mask-hexagon">
                    <img src={image} />
                </div>
            </div>
            <h2 className="text-3xl font-bold grow">{name}</h2>
            <p>{description.slice(0, 40)}...</p>
            <p className="absolute bg-swhite top-56 px-3 font-semibold rounded-full">${price}</p>
            <Link to={`/Details/${id}`}><button className="btn hover:text-dblue hover:border-dblue hover:bg-white px-4 py-2 text-white bg-dblue">Learn More</button></Link>
        </div>
    );
};

export default Card;