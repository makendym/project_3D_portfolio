import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { DownloadLogo } from "../assets";
import { SectionWrapper } from "../hoc";
import { resume } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResumeCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
            <div className='relative w-full h-[230px]'>
                <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                />
                <a
                    href={source_code_link}
                    download="Makendy's Resume"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >

                            <img
                                src={DownloadLogo}
                                alt='download'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </a>
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            </div>
        </motion.div >
    );
};

const Resume = () => {
    return (
        <>
            <div className={`mt-12 bg-black-100 rounded-[20px]`}>
                <div
                    className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
                >
                    <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>Download my</p>
                        <h2 className={styles.sectionHeadText}>Resume.</h2>
                    </motion.div>
                </div>

                <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                    {resume.map((resumes, index) => (
                        <ResumeCard key={`project-${index}`} index={index} {...resumes} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Resume, "resume");
