
import { useNavigate, useRouteError } from "react-router-dom";


const Errorpage = () => {
    const navigate = useNavigate()
    const error = useRouteError();
    console.error(error);
    return (
        <div className="flex flex-col justify-center items-center border-red-800 border-4 min-h-screen">
            <h1 className="text-2xl font-bold my-4">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div className="mt-12">
                <button onClick={() => navigate(-1)}  className="btn bg-black text-white font-semibold">Go Back</button>
            </div>
        </div>
    );
};

export default Errorpage;