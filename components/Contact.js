import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Contact(props) {
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
      });
    }
    if (!inView) {
      animation.start({
        x: '-50px',
        opacity: 0,
      });
    }
  }, [inView]);
  return (
    <section ref={ref} id="contact">
      <div className="flex flex-col md:max-w-6xl max-w-xs h-screen m-auto text-left">
        <motion.div
          animate={animation}
          className="absolute max-w-4xl text-white mt-24 pr-6 md:pr-0 pl-1 md:pl-0 "
        >
          <h2 className="text-4xl md:text-9xl tracking-wide font-semibold text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-red-500 mt-4 rounded-full"></div>
          <div className="w-24 h-1 bg-red-500 mt-4 rounded-full ml-12"></div>
          <p className="h-auto max-w-md mt-5 pt-3">
            I’m currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <div className="relative brightness-125 mt-8 text-left">
            <button
              className="bg-red-600 w-auto h-14 rounded-xl hover:scale-105
            "
            >
              <Link href="mailto:mr.babluj0@gmail.com" className="z-30">
                <a className="p-6">Say Hello</a>
              </Link>
            </button>
            <ul>
              <li className="grid grid-cols-3 w-40 mt-7">
                <a
                  href="https://www.instagram.com/manzoor__ahmed07?igsh=YnJlM3JnM3M3NzJo"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="h-6 w-auto" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100049290452298"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="h-6 w-auto" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100049290452298"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="h-6 w-auto" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
