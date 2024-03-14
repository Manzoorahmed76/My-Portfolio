import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
        x: '-200px',
        opacity: 0,
      }),
        animation2.start({
          y: '200px',
          opacity: 0,
        });
    }
  }, [inView]);

  return (
    <header className="fixed w-full h-auto top-0 z-50 font-firacode">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 pt-3">
        <div className="flex items-center justify-between flex-wrap content-center h-full w-full z-50 text-sm">
          <div>
            <h1 className="text-2xl text-white">Mr,BaBlU</h1>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white block md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  className={!isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen
              ? '-translate-y-0'
              : '-translate-y-2 opacity-0 md:-translate-x-0 md:opacity-100'
          } md:flex flex-col md:flex-row justify-end w-full h-full container transition-all duration-500 ease-in`}
        >
          <ul className="flex flex-row text-sm font-thin justify-center items-center text-white gap-x-10">
            <li className="block py-5">
              <Link href="#about">
                <a>About</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#experience">
                <a>Experience</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#build">
                <a>Build</a>
              </Link>
            </li>
            <li className="block py-5">
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
