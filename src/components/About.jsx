import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from 'react';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Globe from 'react-globe.gl';
import { KeyboardCanvas, OverviewModelCard, OverviewStage } from './overview3d';
import WebGLBoundary from './canvas/WebGLBoundary';
import Button from '../components/Button.jsx';
import AppleFace from "../assets/AppleFace.png";
import MeHello from "../assets/mehellowing.png";
import cybersecurity from "../assets/cybersecurity.jpg"
import copyIcon from "../assets/copy.svg";
import tickIcon from "../assets/tick.svg";
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
                <OverviewStage>
                {/* Arbitrary grid values: index.css redefines the xl:grid-* utilities without breakpoints. */}
                <div className="grid gap-5 [grid-template-columns:minmax(0,1fr)] md:[grid-template-columns:repeat(2,minmax(0,1fr))] md:[grid-auto-flow:dense] xl:[grid-template-columns:repeat(3,minmax(0,1fr))] xl:[grid-template-rows:repeat(6,minmax(0,1fr))]">
                    {/* Grid 1: Introduction */}
                    <div className="xl:[grid-row:span_3/span_3]">
                        <div className="grid-container">
                            <img
                                src={MeHello}
                                alt="grid-1"
                                className="w-full h-auto object-contain"
                            />
                            <OverviewModelCard model="laptop" className="h-[150px]" />
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    Hi, I’m Samuel
                                </p>
                                <p className="grid-subtext !text-secondary text-sm sm:text-base md:text-lg lg:text-xl">
                                    CS student at McGill University (AI concentration) with hands-on experience
                                    building backend systems, security tools, and ML-powered applications across
                                    three software engineering internships.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 2: Tech Stack */}
                    <div className="xl:[grid-row:span_3/span_3]">
                        <div className="grid-container">
                            <OverviewModelCard model="hud" className="h-[280px] sm:h-[355px]" />
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    AI, Security &amp; Backend Systems
                                </p>
                                <p className="grid-subtext !text-secondary text-sm sm:text-base md:text-lg lg:text-xl">
                                    I build with Java/Spring Boot, Python, and TypeScript — applying ML and
                                    security principles to design distributed, production-grade systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 3: Globe Component */}
                    <div className="xl:[grid-row:span_4/span_4]">
                        <div className="grid-container">
                            <div className="rounded-3xl w-full flex justify-center items-center">
                                <WebGLBoundary>
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
                                </WebGLBoundary>
                            </div>
                            <KeyboardCanvas className="h-[110px] sm:h-[140px]" />
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    Montreal-based, globally minded
                                </p>
                                <p className="grid-subtext !text-secondary text-sm sm:text-base md:text-lg lg:text-xl">
                                    Based in Montreal, QC. Exchange program at Hong Kong Polytechnic University
                                    (Jan–May 2026). Open to remote and on-site opportunities worldwide.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 4: Passion for Coding */}
                    <div className="md:[grid-column:span_2/span_2] xl:[grid-row:span_3/span_3]">
                        <div className="grid-container">
                            <img
                                src={cybersecurity}
                                alt="grid-3"
                                className="w-full h-auto object-contain"
                            />
                            <div className="grid grid-cols-2 gap-5 w-full">
                                <OverviewModelCard model="headphones" className="h-[150px] sm:h-[170px]" />
                                <OverviewModelCard model="speaker" className="h-[150px] sm:h-[170px]" />
                            </div>
                            <div>
                                <p className="grid-headtext text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                    Practical, security-conscious engineering
                                </p>
                                <p className="grid-subtext !text-secondary text-sm sm:text-base md:text-lg lg:text-xl">
                                    I focus on building software that is reliable, secure, and maintainable. From microservices
                                    and distributed event streams to ML threat detection — I care about correctness, performance,
                                    and the design decisions behind each system.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grid 5: Contact Me */}
                    <div className="xl:[grid-row:span_2/span_2]">
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
                                        src={hasCopied ? tickIcon : copyIcon}
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
                </OverviewStage>
            </section>


            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Areas of Focus</h2>
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
