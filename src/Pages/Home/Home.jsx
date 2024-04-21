import { Link, useLoaderData } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

const Home = () => {
    const allServices = useLoaderData()
    return (
        <div>
            {/* Banner Section */}
            <div className="hero min-h-[80vh] bg-base-100 my-5">
                <div className="hero-content flex ">

                    <div className="flex-1">
                        <h1 className="text-5xl font-regular uppercase font-bold">Digital Markteing Solutions  <span className="text-gray-400">For <br /> Ambitious Brand</span></h1>
                        <p className="py-6">Transform your online presence with our powerhouse digital marketing strategies.  Let us be your guide to success in the ever-evolving digital landscape. Ready to amplify your brand? Lets get started today.</p>
                        <button className="btn bg-slate-600 text-white rounded-full">Get Started</button>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/vv7WBSQ/colleagues-talking-office-1.jpg" className=" rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
            {/* Our Services section */}
            <div>
                <h1 className="my-8 text-center text-4xl font-bold ">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 w-[80%] mx-auto">
                    {
                        allServices.map(service => <>
                            <div className="card card-compact  bg-base-100 shadow-xl">
                                <figure><img src={service.img} alt="Shoes" className="w-full h-[200px]" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.title}</h2>
                                    <p>{service?.description?.length>90 && service.description.slice(0,90)}...<Link className="inline-flex items-center gap-1 text-blue-800 font-semibold" to='/'>View Details <LuExternalLink /></Link></p>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>


            {/* Hppy clints */}



            {/* Our team member */}
        </div>

    );
};

export default Home;