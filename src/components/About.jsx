import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import StarWrapper from "../hoc/SectionWrapper";
import { Tilt } from "react-tilt";
const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    console.log(index);
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  return (
    <>
      <motion.div varitants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary
       text-[17px] max-w-3xl leading-[30px]"
        varitants={fadeIn("", "", 0.1, 1)}
      >
        I'm a skilled software developer with expertise in Python, Java, and web
        development technologies like HTML5, CSS3, JavaScript, and frameworks
        such as Node.js, React.js, and Next.js. I have strong experience in
        database management with MySQL and MongoDB, and I'm proficient in using
        tools like Postman, Git, and Figma. I specialize in full-stack web
        development (MERN stack + Next.js) and API integration, with a solid
        understanding of data structures, algorithms, and object-oriented
        programming. Let's collaborate to bring your projects to life with
        efficient, scalable, and user-centric solutions!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default StarWrapper(About, "about");
