import React from 'react'
import Header from '../components/Header'
import Main_Search from '../components/MainSearch'
import ContrySelect from '../components/ContrySelect'
import Footer from '../components/Footer'

import 기장 from '../assets/기장.jpg';
import 부산 from '../assets/부산.jpg';
import 울산 from '../assets/울산.jpg';

interface Image {
  name: string;
  src: string;
}

const HomePage: React.FC = () => {
  const images: Image[] = [
    { name: 'image1', src: 기장 },
    { name: 'image2', src: 부산 },
    { name: 'image3', src: 울산 }
  ];
  
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Main_Search></Main_Search>
      </div>
      <div>
        <ContrySelect images={images} />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default HomePage;