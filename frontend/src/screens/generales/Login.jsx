import React, { useState } from 'react'
import logo_login1 from '../../img/Login_img1.png'
import logo_login2 from '../../img/Login_img2.png'
import Bkg from '../../assets/Bkg.webp'
import { MdOutlineSearch } from "react-icons/md";


const Login_input = (props) => {
  return (
    <div>
      <p className='my-3 font-semibold'> {props.label} </p>
      <input className='max-w-[426px]  w-full h-[52,96px] rounded-full placeholder:text-sm placeholder:  box-border py-2 pl-9 pr-3 border-[#96BE8C] border-2 focus:outline-none ' placeholder={props.text} />
    </div>
  )
}








const Login = () => {

  const [user, setUser] = useState(true); // sera false cuando el usuario no este registrado

  const cambiarLoginPage = () => {
    user ? setUser(false) : setUser(true);


  }




  return (
    <div className='h-min w-full bg-[#f7f7f7]'>
      <div className='flex relative justify-center items-center w-full h-96 bg-center bg-cover' style={{ backgroundImage: `url(${Bkg})` }}>
          <h2 className='text-5xl font-bold pb-16 text-white drop-shadow-lg'>{user ? 'Inicia sesión' : 'Registrate'}</h2>
      </div>
     {/* login */}
      <div className='max-w-[1071px] min-h-[741px] p-10 border rounded-md transform -translate-y-40  bg-white flex flex-row  items-center justify-between mx-auto '>
        <div className='max-w-[529px] max-h-[661px]'>
          {user == true ?
            <img src={logo_login1}></img> :
            <img src={logo_login2}></img>
          }

        </div>
        <div className='p-5 w-[445px] h-[603px]'>


          <div className=''>
            <p className='mx-auto text-center font-semibold '>Welcome to lorem..!</p>
            {/* boton de opciones */}
            <div className='w-[322px] h-[59px] bg-[#c7dbc1] rounded-full overflow-auto my-6 flex justify-around items-center mx-auto'>
              <button onClick={()=>cambiarLoginPage()} className={!user ? 'bg-[#c7dbc1] w-[143px] h-[40px] rounded-full text-white' : 'bg-[#97bf8c] w-[143px] h-[40px] rounded-full text-white'}>Login</button>
              <button onClick={()=>cambiarLoginPage()} className={!user ? 'bg-[#97bf8c] w-[143px] h-[40px] rounded-full text-white' : 'bg-[#c7dbc1] w-[143px] h-[40px] rounded-full text-white'} >Register</button>
            </div>

          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className=''>
            {user == false &&
              <Login_input label='Email Adress' text='Enter yor Email Adress'></Login_input>
            }
            <Login_input label='User name' text='Enter your User name' />
            <Login_input label='Password' text='Enter yor Password' />
          </div>
          <button className='w-full bg-[#97bf8c] rounded-full py-2 mt-12 text-white font-semibold'>Sign in</button>
        </div>

      </div>
    </div>
  )
}










export default Login





