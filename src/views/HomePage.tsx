import React from 'react'
import Header from '../components/Header'
import Main_Search from '../components/MainSearch'
import ContrySelect from '../components/ContrySelect'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Main_Search></Main_Search>
      </div>
      <div>
        <ContrySelect></ContrySelect>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}
