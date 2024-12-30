import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from 'react';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import AppleFace from "../assets/AppleFace.png";
import MeHello from "../assets/mehellowing.png";
import API_image from "../assets/API.svg"
import cybersecurity from "../assets/cybersecurity.jpg"
const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('samuelha120@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <section className="c-space my-20 px-4" id="about">
                <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
                    {/* Grid 1: Introduction */}
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img
                                src={MeHello}
                                alt="grid-1"
                                className="w-full h-auto object-contain"
                            />
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    Hi, I’m Samuel Ha
                                </p>
                                <p className="grid-subtext text-sm sm:text-base md:text-lg lg:text-xl">
                                    With 3 years of coding experience, I have honed my skills in both frontend and backend development,
                                    creating dynamic and responsive websites.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 2: Tech Stack */}
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img
                                src={API_image}
                                alt="grid-2"
                                className="w-full h-auto sm:h-[355px] object-contain"
                            />
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    Tech Stack
                                </p>
                                <p className="grid-subtext text-sm sm:text-base md:text-lg lg:text-xl">
                                    I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                    applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 3: Globe Component */}
                    <div className="col-span-1 xl:row-span-4">
                        <div className="grid-container">
                            <div className="rounded-3xl w-full flex justify-center items-center">
                                <Globe
                                    height={window.innerWidth < 768 ? 200 : 326}
                                    width={window.innerWidth < 768 ? 200 : 326}
                                    backgroundColor="rgba(0, 0, 0, 0)"
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[
                                        { lat: 40, lng: -100, text: 'Montreal, Canada', color: 'white', size: 15 },
                                    ]}
                                />
                            </div>
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    I’m very flexible with time zone & locations
                                </p>
                                <p className="grid-subtext text-sm sm:text-base md:text-lg lg:text-xl">
                                    I&apos;m based in Montreal, Canada and open to remote work worldwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 4: Passion for Coding */}
                    <div className="xl:col-span-2 xl:row-span-3">
                        <div className="grid-container">
                            <img
                                src={cybersecurity}
                                alt="grid-3"
                                className="w-full h-auto object-contain"
                            />
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    My Passion for Coding
                                </p>
                                <p className="grid-subtext text-sm sm:text-base md:text-lg lg:text-xl">
                                    I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s
                                    my passion. I enjoy exploring new technologies, enhancing my skills, and working in teams to fully contribute
                                    to projects and learn from others.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 5: Contact Me */}
                    <div className="xl:col-span-1 xl:row-span-2">
                        <div className="grid-container">
                            <div className="flex justify-center items-center h-[300px] w-full">
                                <img
                                    src={AppleFace}
                                    alt="grid-4"
                                    className="w-auto max-h-full object-contain"
                                />
                            </div>

                            <p>

                            </p>
                            <div className="space-y-2">
                                <p className="grid-subtext text-center text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                                    Contact me!
                                </p>
                                <div
                                    className="copy-container flex justify-center items-center"
                                    onClick={handleCopy}
                                >
                                    <img
                                        src={hasCopied ? 'src/assets/tick.svg' : 'src/assets/copy.svg'}
                                        alt="copy"
                                        className="h-6 w-6"
                                    />
                                    <p className="ml-2 text-lg font-medium text-gray_gradient text-white">
                                        samuelha120@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Job Interests</h2>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};


export default SectionWrapper(About, "about");
