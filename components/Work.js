import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Work(props) {
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
          x: 0,
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
          x: '800px',
          opacity: 0,
        });
    }
  }, [inView]);
  return (
    <section ref={ref} id="experience">
      <div className="flex flex-col max-w-full h-screen m-auto mt-28">
        <motion.div
          animate={animation}
          className="absolute max-w-full md:max-w-6xl text-white text-left mt-16 z-50 md:ml-44 ml-0"
        >
          <h2 className="w-full h-auto text-4xl md:text-9xl tracking-wide font-semibold text-white ml-10 md:ml-0">
            Work
          </h2>
          <div className="w-24 h-1 bg-red-500 mt-7 rounded-full ml-12 md:ml-0"></div>
          <div className="w-24 h-1 bg-red-500 mt-4 rounded-full ml-24 md:ml-12"></div>
          <div className="w-auto h-auto -mt-24 md:-mt-0">
            <div className="flex flex-col md:flex-row max-w-xs md:max-w-none md:w-[600px] h-auto mt-36 pl-10 md:pl-0">
              <div className="flex w-auto h-auto ">
                <h3 className="font-firacode">Literasi Prima</h3>
              </div>
              <div className="h-auto w-auto bg-red-500 border-2 border-red-500"></div>
              <div className="flex flex-col w-full h-auto ml-0 md:ml-6">
                <h4>
                  SEO Development<span> @Literasi Prima</span>
                </h4>
                <p className="pt-2">Oktober 2020</p>
                <ul className="pt-4 text-xs brightness-75 font-firacode">
                  <li>▹ handle news blog website</li>
                  <li>▹ installation template, and plugins in wordpress</li>
                  <li>▹ set up domain & hosting from hosting provider</li>
                  <li>
                    ▹ Prepare Yoast SEO, maintain content from content
                    copywriter
                  </li>
                  <li>
                    ▹ connecting between google search and website projects, and
                    google analytics
                  </li>
                  <li>
                    ▹ make sure every content appears on google, and see user
                    interaction on the website using the google console
                  </li>
                  <li>▹ Adjust content to be relevant to SEO</li>
                  <li>
                    ▹ put every content a keyword, so can detect in google
                  </li>
                  <li>
                    ▹ improve performance, accessibility, best practice, SEO,
                    and PWA using lighthouse
                  </li>
                  <li>▹ make the website rank one, using serprobot</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={animation2}
          className="flex justify-center md:justify-end w-full h-full z-20 ml-0 md:ml-[600px]"
        >
          <div className="relative w-full h-[500px] md:h-full mt-48 md:mt-0 overflow-hidden shadow-2xl">
            <div className="absolute w-full bg-gray-900 h-full z-20 opacity-90  transition-all delay-150 ease-in-out"></div>
            <div className="w-full h-full">
              <Image src="/airkami.png" alt="Air Kami" layout="fill" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
