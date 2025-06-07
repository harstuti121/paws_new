import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Recomended from '../components/Recomended'
import RecentArticles from '../components/Articles'
import Product from '../components/Product'
import Animated from '../components/Animated'
import Contact from '../components/Contact'
import Recentart from '../components/Recentart';
import Front from '../components/Front/front';
import Testimonials from '../components/Testimonials'
import ServicesAuth from '../components/servicesauth'
const Home = () => {
  return (
    <div>
      {/* <Animated src="https://th.bing.com/th/id/R.4396ab0905629f51fb075fe43897914c?rik=QDRw1IfkX3TaPw&riu=http%3a%2f%2fwww.pbh2.com%2fwordpress%2fwp-content%2fuploads%2f2013%2f03%2fcute-puppy-gifs-duck-toy.gif&ehk=5IQ5YaVolzCEO89jQUerHPv5rp2jAN7nFQtVT5H4MWU%3d&risl=&pid=ImgRaw&r=0"/> */}
      <Front/>
      <ServicesAuth/> 
      <Product />
      {/* <Recomended/> */}
      {/* <RecentArticles/> */}
      <Testimonials/>
      {/* <Contact/>  */}
     <Recentart/>
    </div>
  )
}

export default Home