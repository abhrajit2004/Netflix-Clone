import logo from "../assets/logo.svg"
import Footer from './Footer'
import { useState } from 'react'
import { login, signup } from '../firebase'
import spinner from "../assets/netflix_spinner.gif"

const Login = () => {

  const [signState, setSignState] = useState("Sign Up")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(signState === "Sign Up"){
      await signup(name, email, password);
    }
    else{
      await login(email, password);
    }
    setLoading(false);
  }

  return (
    <>

    {loading?<div className="spinner w-[100%] h-[100vh] flex justify-center items-center">
      <img className='w-16' src={spinner} alt="" />
    </div>:
    <div className='login'>
      <img className="w-40 p-4" src={logo} alt="" />
      <div className="loginform w-[500px] mx-auto p-16 flex flex-col justify-center gap-8 bg-[rgba(0,0,0,0.7)]">
        <h1 className='text-4xl font-bold'>{signState}</h1>
        <form className='flex flex-col gap-4 w-full justify-center items-center' action="">
          {signState === "Sign Up" &&  <input value={name} onChange={handleChangeName} className='w-full px-4 py-4 rounded-lg bg-transparent border border-gray-500' type="text" placeholder='Enter your name' />}
          <input value={email} onChange={handleChangeEmail} className='w-full px-4 py-4 rounded-lg bg-transparent border border-gray-500' type="email" placeholder='Enter your email' />
          <input value={password} onChange={handleChangePassword} className='w-full px-4 py-4 rounded-lg bg-transparent border border-gray-500' type="password" placeholder='Enter your password' />
          <button onClick={userAuth} type='submit' className='text-white bg-[red] transition-all duration-300 hover:bg-[#c11119] w-full px-4 py-2 rounded-lg'>{signState}</button>
          <div className="form-assist text-white">
            <div className="remember flex gap-2 justify-center items-center">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
              {signState === "Sign Up" ?
              <div className="signup my-2 flex gap-2">
                <p>Already have an account?</p><span onClick={()=>setSignState("Sign In")} className='cursor-pointer font-bold'>Sign In Now</span>
              </div>:
             <div className="signin my-2 flex gap-2">
              <p>New to Netflix?</p><span onClick={()=>setSignState("Sign Up")} className='cursor-pointer font-bold'>Sign Up Now</span>
            </div>
              }
          </div>
        </form>
      </div>
    </div>
    }
      <Footer />
    </>
  )
}

export default Login