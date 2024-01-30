import React from 'react'
import { useState, useEffect } from 'react';

const index = ({blogDat}) => {

    console.log(blogDat);
   
  return (
    <div>
       <div dangerouslySetInnerHTML={{ __html: blogDat }}></div>
    </div>
  )
}

export async function getServerSideProps(context) {
    // Fetch data from external API

    const res = await fetch('https://analyticsliv.com')
    const blogDat = await res.text()

  console.log(blogDat);

    // Pass data to the page via props
    return { props: { blogDat} }
}

export default index