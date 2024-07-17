import React from 'react'
import Header from '../components/Header'
import Main_Search from '../components/MainSearch'
import ContrySelect from '../components/ContrySelect'
import Footer from '../components/Footer'
import  '../styles/기장.jpg'
import  '../styles/울산.jpg'
import  '../styles/부산.jpg'

export default function HomePage() {
  const images = [
    '/asset/기장.jpg',
    '/asset/울산.jpg',
    '/asset/부산.jpg'
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
        <ContrySelect images={images}/>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}
