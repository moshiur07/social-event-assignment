import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {Login,googlelogin}=useContext(AuthContext)
    const navigate= useNavigate()
    const location = useLocation()

    const googleLogIn =()=>{
        googlelogin()
        .then(res => {
            console.log(res.user);
            toast.success('Successfully Logged In!')
            navigate('/')
        })
        .catch(error => {toast.error(error.message)
        console.log(error.message)})
    }
    const handleLogin= e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password);

        Login(email,password)
        .then(res => {
            toast.success('Successfully Logged In!');
            navigate(location?.state ? location.state : '/')
            console.log(res.user)
        })
        .catch(error => toast.error(error) )
    }

    return (
        <div>
            <Toaster/>
            <section className=" dark:bg-gray-900">
                <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full border bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center mb-5 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your Account!
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4  md:space-y-6" action="#">
                                
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required></input>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                                </div>
                                
                                <button type="submit" className="w-full text-white bg-[#403F3F] hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Do not have an account? <Link to='/registration' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                                </p>
                            </form>
                             <div>
                                    <button onClick={googleLogIn} className="btn btn-outline hover:bg-blue-400"><FcGoogle className="text-xl" />   Continue with Google</button>
                                </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;