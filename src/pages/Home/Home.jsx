import { useLoaderData } from "react-router-dom";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            {services.map(service => (
                <img className="w-96" key={service.id} src={service.img} alt="img" />
            ))}
        </div>
    );
};

export default Home;