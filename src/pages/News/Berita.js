import React, { useState } from 'react'
import AuthenticatedUser from '../../Layouts/Authenticated'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Article from './Article'
import ArticleContainer from '../../components/ArticleContainer'

const Berita = () => {
  const [articles, setArticles] = useState()
  const [show, setShow] = useState(false)
  return (
    <AuthenticatedUser>
      {!show ? (
        <div className="w-full min-h-screen bg-[#EEF1F5] mt-[-48px] pb-[100px] ">
        <div className="rounded-b-[40px] bg-gradient-to-r from-[#0D377B] to-[#04214D] px-[24px] pt-[25px] pb-[32px] ">
          <div className="flex justify-between mt-[51px]">
            <NavLink to='/' >
            <i className="bx bx-menu-alt-left text-[30px]"></i>
            </NavLink>
          </div>
          <h1 className="text-[24px] font-semibold mb-[12px] mt-[46px]">
            Wiki Cope
          </h1>
          <p className="text-[14px] max-w-[327px] mb-[21px]">
          Basic astronomy information for beginners
          </p>
        </div>
        <div className='flex flex-col px-[25px] gap-6 pt-6 '  >
            {Article.map((item, index) => (
              <div onClick={() => {
                setArticles(item);
                setShow(true)
              }}  key={index} className='flex justify-between px-[13px] gap-[20px] py-[22px] items-center rounded-[20px] bg-[#EEF1F5] shadow-md shadow-gray-300  '>
              <img alt='/images/moon.png' src={item.image} className='w-[137px] h-auto rounded-[10px] object-cover ' />
              <div>
              <h1 className='font-bold text-[16px] text-black ' >{item.title}</h1>
              <p className='text-black' >{item.descTitle}</p>
              </div>
          </div>
            ))}
        </div>
        </div>
      ) : <ArticleContainer onClick={() => setShow(false)}  articles={articles}/>}
    </AuthenticatedUser>
  )
}

export default Berita