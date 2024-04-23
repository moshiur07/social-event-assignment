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
                        allServices.map(service => <div key={service.id}>
                            <div className="card card-compact  bg-base-100 shadow-xl">
                                <figure><img src={service.img} alt="Shoes" className="w-full h-[200px]" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.title}</h2>
                                    <p>{service?.description?.length > 90 && service.description.slice(0, 90)}...<Link className="inline-flex items-center gap-1 text-blue-800 font-semibold" to={`/details/${service.id}`}>View Details <LuExternalLink /></Link></p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>


            {/* FAQ */}
            <h1 className="my-8 text-center text-4xl font-bold ">FAQ</h1>

            <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2"  />
                <div className="collapse-title text-xl font-medium">
                What sets your SEO services apart from other agencies?
                </div>
                <div className="collapse-content">
                    <p>Our SEO services are distinguished by our comprehensive approach tailored to your specific business needs. We begin with an in-depth analysis of your website's current performance, competitor landscape, and target audience. From there, we develop a customized strategy that focuses on optimizing both on-page and off-page elements to improve your websites visibility and organic search rankings. Unlike cookie-cutter solutions, we prioritize long-term success by staying updated on the latest search engine algorithms and trends, ensuring sustainable growth for your online presence.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How do you measure the success of social media management campaigns?
                </div>
                <div className="collapse-content">
                    <p>We believe in a data-driven approach to social media management, where success is measured through key performance indicators (KPIs) aligned with your business objectives. These KPIs may include metrics such as engagement rate, reach, click-through rate, conversions, and return on ad spend (ROAS). By closely monitoring these metrics using advanced analytics tools, we track the effectiveness of our social media strategies and make data-informed adjustments to optimize performance over time. Our transparent reporting system provides you with detailed insights into campaign performance, empowering you to make informed decisions about your social media investments.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-10">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can you explain the importance of content marketing in todays digital landscape?
                </div>
                <div className="collapse-content">
                    <p>Content marketing plays a crucial role in building brand awareness, establishing authority, and driving customer engagement in todays competitive digital landscape. By creating high-quality, relevant, and valuable content, you can attract and retain your target audience, nurture leads, and ultimately drive conversions. Content comes in various forms, including blog posts, articles, infographics, videos, and podcasts, allowing you to connect with your audience across multiple channels and platforms. Additionally, well-executed content marketing not only enhances your SEO efforts by improving search engine visibility but also fosters brand loyalty and credibility by providing solutions to your audiences pain points and establishing your brand as a trusted industry resource.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-10">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How do you ensure a successful email marketing campaign?
                </div>
                <div className="collapse-content">
                    <p>A successful email marketing campaign begins with understanding your audience and delivering relevant, personalized content that resonates with their needs and interests. We start by segmenting your email list based on factors such as demographics, purchase history, and engagement levels to ensure targeted messaging. Our team then crafts compelling email copy and designs visually appealing templates that align with your brand identity. We also leverage automation tools to streamline the process and send timely, triggered emails based on subscriber behavior. Through rigorous A/B testing and performance tracking, we continuously refine our strategies to optimize open rates, click-through rates, and conversions, ultimately maximizing the ROI of your email marketing efforts.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-10">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                What role does website design and development play in digital marketing success?
                </div>
                <div className="collapse-content">
                    <p>Website design and development are fundamental components of a successful digital marketing strategy as they serve as the foundation for all online activities. A well-designed website not only captures visitors attention but also provides a seamless user experience that encourages engagement and conversions. Our expert team combines creative design with technical expertise to create visually stunning websites that are responsive, intuitive to navigate, and optimized for search engines. By incorporating persuasive call-to-actions, clear messaging, and intuitive navigation, we guide visitors through the buyers journey, from initial discovery to conversion. Additionally, our websites are built with scalability and performance in mind, ensuring they can adapt to evolving digital trends and technologies, and provide a solid platform for future growth and expansion.</p>
                </div>
            </div>


            {/* Our team member */}



        </div>

    );
};

export default Home;