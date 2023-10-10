import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find(service => service.id === parseInt(id));
    const { name, image, price, description, details } = service;

    return (
        <div className="bg-swhite">
            <div className="w-10/12 h-full mx-auto py-6">
                <h2 className="text-5xl text-center text-dblue font-bold py-5">{name}</h2>
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
                    <img className="w-full lg:w-[40%] object-cover" src={image} alt="Image" />
                    <div className="w-full h-full py-4 px-4 bg-cblue text-white">
                        <p className="text-justify bg-swhite text-dblue px-3 py-2 rounded">{description}</p>
                        <h1 className="text-3xl font-semibold text-center py-3">Games</h1>
                        <div className="flex flex-wrap justify-between items-center gap-2 text-center pb-3">
                            {details.games.map((game, index) => (
                                <div key={index}>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <img className="w-20 h-20 object-cover rounded-full" src={game.logo} alt="" />
                                        <h1 className="font-medium">{game.name}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div>
                            <h2 className="text-3xl font-semibold text-center py-3">Equipments</h2>
                            <ul className="flex flex-wrap justify-between items-center gap-2 text-center pb-3">
                                {details.equipment.map((equipment, index) => (
                                    <li className="font-medium" key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </div>
                        <hr />
                        <div className="py-3">
                            <p>Location: {details.location}</p>
                            <p>Requirements: {details.requirements}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-3xl font-semibold bg-swhite text-dblue py-2 px-4 rounded">{price}</p>
                            <p className="text-3xl font-semibold bg-swhite text-dblue py-2 px-4 rounded">Lo {details.duration} hours</p>
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-2 mt-6 flex justify-center items-center">
                    <button className="btn bg-dblue text-white hover:bg-cblue">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;