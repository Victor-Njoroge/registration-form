import React from 'react'
import '../assets/css/app.css'
const Authlayout = ({children}) =>{
  return (
    <div className='auth-multi-layout'>
        <div className="auth-box">{children}</div>
    </div>
  );
};

export default Authlayout;