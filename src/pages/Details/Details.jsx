import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find(service => service.id === parseInt(id));
    const { name, image, price, description, details } = service;

    return (
        <div className="bg-swhite text-dblue">
            <div className="w-10/12 mx-auto py-6">
                <h2 className="text-5xl text-center font-bold py-5">{name}</h2>
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
                    <img className="w-full lg:w-[40%] object-cover" src={image} alt="Image" />
                    <div className="w-full h-full">
                        <p className="text-justify">{description}</p>
                        <h1 className="text-3xl font-semibold text-center py-3">Games</h1>
                        <div className="flex flex-wrap justify-between items-center gap-2 text-center">
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
                            <ul className="flex flex-wrap justify-between items-center gap-2 text-center">
                                {details.equipment.map((equipment, index) => (
                                    <li className="font-medium" key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Price: ${price}</p>
                            <p>Duration:{details.duration} hours</p>
                        </div>
                        <p>Location: {details.location}</p>
                        <p>Requirements: {details.requirements}</p>
                    </div>
                </div>

                <button className="btn sticky bottom-2 left-full">Buy Now</button>
            </div>
        </div>
    );
};

export default Details;