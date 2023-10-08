import { useLoaderData } from "react-router-dom";
import Card from "../../components/Navbar/Card/Card";

const Home = () => {
    const services = useLoaderData();
    return (
        <>
            <div className="bg-swhite text-dblue py-6">
                <h1 className="text-center text-6xl font-bold">Our Services</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:w-10/12 w-full mx-auto">
                    {services.map(service => (
                        <Card key={service.id} service={service}></Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;