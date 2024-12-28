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
        navigator.clipboard.writeText(' samuelha120@gmail.com');
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

            <section className="c-space my-20" id="about">
                <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img src={MeHello} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                            <div>
                                <p className="grid-headtext ">Hi, I’m Samuel Ha</p>
                                <p className="grid-subtext ">
                                    With 3 years of coding experience, I have honed my skills in both frontend and backend dev, creating dynamic
                                    and responsive websites.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img src={API_image} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                            <div>
                                <p className="grid-headtext">Tech Stack</p>
                                <p className="grid-subtext">
                                    I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                    applications
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-4">
                        <div className="grid-container sm:h-[500]">
                            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                <Globe
                                    height={window.innerWidth < 768 ? 200 : 326} // Adjust height based on screen size
                                    width={window.innerWidth < 768 ? 200 : 326}
                                    backgroundColor="rgba(0, 0, 0, 0)"
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                                />
                            </div>
                            <div>
                                <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
                                <p className="grid-subtext">I&apos;m based in Montreal, Canada and open to remote work worldwide.</p>
                                {/* <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-2 xl:row-span-3">
                        <div className="grid-container">
                            <img src={cybersecurity} />
                            <div>
                                <p className="grid-headtext">My Passion for Coding</p>
                                <p className="grid-subtext">
                                    I love solving problems and building things through code. Programming isn&apos;t just my
                                    profession
                                    It&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                                    I also like to work in teams, making full part of the project and learning from
                                    others the knowledge that is required for full prosperity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-1 xl:row-span-2">
                        <div className="grid-container">
                            <div className="flex justify-center items-center h-[150px] w-full">
                                <img
                                    src={AppleFace}
                                    alt="grid-4"
                                    className="w-full md:h-[100px] sm:w-[120px] h-fit object-contain"
                                />
                            </div>

                            <div className="space-y-2">
                                <p className="grid-subtext text-center text-white ">Contact me!</p>
                                <div className="copy-container" onClick={handleCopy}>
                                    <img src={hasCopied ? 'src/assets/tick.svg' : 'src/assets/copy.svg'} alt="copy" />
                                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white"> samuelha120@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Job Interests</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );

};

export default SectionWrapper(About, "about");
