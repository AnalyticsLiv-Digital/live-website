import React from 'react'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';
import ScrollProgress from '../../components/ScrollProgress';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Element: ScrollElement } = Scroll;


const index= () => {


  useEffect(() => {
 
     fetch('https://script.google.com/macros/s/AKfycbxidlMSRADTNk4kjam5Lf58cESQwxrntzlvO_kvcxx2dmSxdbD2NjxAbecDTyrFJNPs_w/exec?1zZa8YVH0_Mrwrc8MVGwGnuzGsalMQInWvF7o0VnplzA',{method:'get'})
    .then((response)=>{response.json().text()})
    .then((text)=> console.log(text))
    .catch((error) => {
        console.error('Error:', error);
    })
 
  });

  return (
    <>
    
    
    </>
  )
}

export default index