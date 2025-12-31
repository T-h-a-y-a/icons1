import React from 'react'
import Header from '../../components/home/Header'
import About from '../../components/home/About'
import Services from '../../components/home/Services'
import Works from '../../components/home/Works'
import Contact from '../../components/home/contact'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
        <Helmet>
        <title>BPO, IT & AI Services for Business| i‑Cons Technologies</title>
        <meta name="description" content="BPO, IT & AI services tailored for business growth. i‑Cons Technologies delivers smart, scalable solutions to optimize your operations and strategy." />
      </Helmet>
        <Header />
        <About />
        <Services />
        <Works />
        <Contact />
    </div>
  )
}

export default Home