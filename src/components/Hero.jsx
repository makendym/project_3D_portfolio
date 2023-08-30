import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Makendy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications and <br className='sm:block hidden' />
            explore tech solutions across different technologies. <br className='sm:block hidden' />
            Let's chat for fresh ideas!

          </p>
        </div>
      </div>
      <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Center the video
              width: "100%", // Set width to cover the entire viewport
              height: "auto", // Automatically adjust height based on aspect ratio
              maxWidth: "100%", // Ensure the video doesn't exceed viewport width
              maxHeight: "100vh", // Limit video height to the viewport height
              objectFit: "cover",
              opacity: "0.3",
            }}
          >
            <source
              src="https://d3lh4iw97b9uun.cloudfront.net/xlab.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
