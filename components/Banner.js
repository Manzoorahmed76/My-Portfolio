import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Banner() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 7,
        },
      }),
        animation2.start({
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 4,
          },
        });
    }
    if (!inView) {
      animation.start({
        x: '-50px',
        opacity: 0,
      }),
        animation2.start({
          y: '200px',
          opacity: 0,
        });
    }
  }, [inView]);
  return (
    <section ref={ref}>
      <div className="flex w-full h-screen justify-center overflow-hidden">
        <div className="absolute left-0 top-20 z-10 flex-col justify-center w-full h-auto pl-0 md:pl-44">
          <div className="flex flex-col w-full h-auto mx-auto justify-center text-left text-white mt-28 px-10 md:px-0">
            <motion.h1
              animate={animation}
              className="w-full h-auto tracking-wider font-firacode font-thin"
            >
              Hi, my name is
            </motion.h1>
            <motion.h2
              animate={animation}
              className="max-w-3xl h-auto text-4xl md:text-7xl font-bold tracking-wider pt-4"
            >
              MaNzOoR AhMeD
            </motion.h2>
            <motion.h3
              animate={animation}
              className="w-full h-auto text-xl md:text-4xl pt-3"
            >
              I'm web developer. and graphics designer
            </motion.h3>
            <motion.div
              animate={animation}
              className="w-24 h-1 bg-red-500 mt-7 rounded-full"
            ></motion.div>
            <motion.div
              animate={animation}
              className="w-24 h-1 bg-red-500 mt-4 rounded-full ml-12"
            ></motion.div>
            <motion.p
              animate={animation}
              className="max-w-md mt-10 brightness-75 tracking-widest text-md md:text-lg"
            >
              Hi My Nick name is Mr BaBlU & I am a 18 year old child, I Love web designing                   graphics designing Python Prigramming. Hacking Greetings everyone!,
            </motion.p>
            <motion.button
              animate={animation}
              className="w-32 md:w-72 h-14 md:h-16 mt-16 border-2 rounded-md hover:cursor-pointer"
            >
              <a className="text-white font-firacode">Contact Me</a>
            </motion.button>
          </div>
        </div>

        <div className="flex gap-2 md:gap-8 w-full h-full text-white text-center justify-center items-center">
          <motion.div
            animate={animation2}
            className="relative h-96 md:h-full w-full -mt-56 md:mt-72 ml-16 md:ml-[500px] shadow-2xl overflow-hidden "
          >
            <Image src={'/juan3.jpg'} layout="fill" objectFit="cover" />
          </motion.div>
          <motion.div
            animate={animation2}
            className="relative h-96 md:h-full w-full mt-0 shadow-2xl overflow-hidden"
          >
            <Image src={'/juan2.png'} layout="fill" objectFit="cover" />
          </motion.div>
          <motion.div
            animate={animation2}
            className="relative h-96 md:h-full w-full -mt-56 md:mt-72 shadow-2xl overflow-hidden"
          >
            <Image src={'/juan1.JPG'} layout="fill" objectFit="cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
