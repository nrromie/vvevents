import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find(service => service.id === parseInt(id));
    const { name, image, price, description, details } = service;

    return (
        <div className="bg-swhite">
            <div className="w-10/12 mx-auto py-6">
                <h2 className="text-5xl text-center font-bold">{name}</h2>
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
                    <img className="w-full lg:w-[40%] object-cover" src={image} alt="Image" />
                    <div className="w-full">
                        <h1 className="text-3xl font-semibold text-center py-3">Games</h1>
                        <div className="flex flex-wrap justify-between items-center gap-6 text-center">
                            {details.games.map((game, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                    <img className="w-20 h-20 object-cover rounded-full" src={game.logo} alt="" />
                                    <h1 className="font-medium">{game.name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-center py-3">Equipments</h2>
                            <p>{details.equipment}</p>
                        </div>
                        <p>Price: {price}</p>
                        <p>Duration:{details.duration}</p>
                        <p>Location: {details.location}</p>
                        <p>Requirements: {details.requirements}</p>
                    </div>
                </div>
                <p className="text-justify">Description: {description}</p>
            </div>
        </div>
    );
};

export default Details;