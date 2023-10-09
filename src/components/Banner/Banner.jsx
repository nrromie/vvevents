const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HKW4N5q/vvbanner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="flex justify-center items-center">
                        <img className="w-64" src="/logo.png" alt="" />
                    </div>
                    <h1 className="mb-5 text-5xl font-bold">Virtual Victory Events</h1>
                    <p className="mb-5">Where Every Click Leads to a Virtual Victory!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;