import React from 'react'
import { NavLink } from 'react-router-dom'

const ArticleContainer = ({articles, onClick}) => {
  return (
    <div className="w-full min-h-screen bg-[#EEF1F5]  pb-[100px] px-[25px] pt-[30px] ">
      <div onClick={onClick} className='flex gap-5 ' >
      <i className='bx bx-left-arrow-alt text-black  text-[28px] mb-4 '></i>
      </div>
      <h1 className='font-bold text-[16px] text-black mb-4 ' >{articles.title}</h1>
        <img  alt='' src={articles.image} className='object-cover w-full h-[215px] mb-6 ' />
        <p className='text-black mb-4' >Publisher: {articles.publisher}</p>
        <p className='text-black' >{articles.desc}</p>

        </div>
  )
}

export default ArticleContainer