import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const {id}=useParams()
    const allService = useLoaderData()
    const matchedService = allService.find(service => service.id == id)
    console.log(matchedService,allService,id);
    const { img, title, description } = matchedService
    return (
        <div>
           <div className="min-h-screen max-w-screen my-10 text-center space-y-4">
            <img src={img} className="mx-auto my-5 " />
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="font-medium w-[70%] mx-auto">{description} {description} {description} {description}</p>
           </div>
        </div>
    );
};

export default Details;