import Head from 'next/head';
import Image from 'next/image';
import React, { Component } from 'react';
import Header from '..//components/Header';
import Banner from '..//components/Banner';
import SidebarLeft from '..//components/SidebarLeft';
import SidebarRight from '..//components/SidebarRight';
import About from '..//components/About';
import Work from '..//components/Work';
import Build from '..//components/Build';
import Contact from '..//components/Contact';
import { FaTableTennis } from 'react-icons/fa';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Head>
          <title>MaNzOoR AhMeD </title>
          <link rel="icon" href="/Manzoor-favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <body className="flex flex-col justify-center w-full h-auto text-center bg-gradient-to-tr from-[#ce4624] via-[#071F3D] to-[#405369] overflow-x-hidden">
          <Header />

          {/* Banner */}
          <Banner />
          <About />
          <Work />
          <Build />
          <Contact />

          <SidebarLeft />
          <SidebarRight />

          {/* Project */}

          {/* Education */}
        </body>
      </>
    );
  }
}
