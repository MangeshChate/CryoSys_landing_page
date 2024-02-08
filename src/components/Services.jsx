import React from "react";
import { Code, Security } from "@mui/icons-material";
import ComputerIcon from '@mui/icons-material/Computer';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex i-glow flex-row justify-start items-start white-blur-glass p-3 m-2 cursor-pointer rounded-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:translate-y-2 hover:rotate-2">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="container flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center md:flex-row md:p-20 py-12 px-4 w-full">
            <div className="flex-1 flex flex-col justify-start items-start text-center lg:text-start">
                <h1 className="text-white text-3xl sm:text-5xl py-2  text-gradient w-full flex flex-col">
                    <span>
                        Services that we

                    </span>
                  
                    <span>
                        continue to improve

                    </span>
                </h1>
                <p className=" text-white font-thin text-base mt-2 md:w-9/12 w-full ">
                    Our platform is designed to provide you with a seamless experience for all your blockchain needs.
                </p>
            </div>

            <div className="flex-1 flex flex-col justify-start items-center mt-8 md:mt-0 gap-5">
                <ServiceCard
                    icon={<Code className="text-blue-500" style={{ fontSize: '2rem' }} />}
                    title="Custom Software Development"
                    subtitle="We specialize in crafting tailored software solutions that meet your unique business needs and objectives."
                />
                <ServiceCard
                    icon={<Security className="text-green-500" style={{ fontSize: '2rem' }} />}
                    title="Cybersecurity Solutions"
                    subtitle="Protect your valuable data and assets with our comprehensive cybersecurity solutions and expertise."
                />
                <ServiceCard
                    icon={<ComputerIcon className="text-red-500 " style={{ fontSize: '2rem' }} />}
                    title="IT Consulting Services"
                    subtitle="Leverage our IT consulting services to optimize your technology infrastructure and drive business growth."
                />
            </div>
        </div>
    </div>
);

export default Services;
