"use client";
import { motion } from "motion/react";

const Home = () => {
  return (
    <div className="w-fit h-screen mx-auto flex flex-col items-center justify-center space-y-1.5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="flex flex-row text-6xl font-extrabold space-x-1"
      >
        <h1>Hello, World!</h1>
        <motion.h1
          animate={{
            rotate: [0, -30, 45, 0],
            transition: { duration: 1, delay: 1 },
          }}
        >
          👋
        </motion.h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="text-3xl font-light"
      >
        학생 개발자 최은우 입니다.
      </motion.p>
    </div>
  );
};

export default Home;
