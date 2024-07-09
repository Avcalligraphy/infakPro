import React from 'react'
import { useLocation } from 'react-router-dom';
import AuthenticatedUser from '../Layouts/Authenticated';


const ArticlePage = () => {
  const {state} = useLocation();

  const { title, desc} = state
  console.log(title, desc)
    
  return (
    <AuthenticatedUser>ArticlePage</AuthenticatedUser>
  )
}

export default ArticlePage