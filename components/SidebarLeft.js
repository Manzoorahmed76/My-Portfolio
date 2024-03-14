import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function SidebarLeft() {
  return (
    <section>
      <div className="fixed h-[270px] bottom-0 left-0 z-50">
        <div className="flex flex-col gap-6 justify-center w-10 md:w-32 h-full text-white items-center pt-14">
          <a
            href="https://www.facebook.com/profile.php?id=100049290452298"
            aria-label="Github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="h-6 w-auto" />
          </a>
          <a
            href="https://www.instagram.com/manzoor__ahmed07?igsh=YnJlM3JnM3M3NzJo"
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
          <div className="w-[2px] h-80 block bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default SidebarLeft;
