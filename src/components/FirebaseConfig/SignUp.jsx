import React, { useRef } from "react";
import './SignUp.css'
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate()
    const {creatAccount} = useContext(AuthContext)

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordRef2 = useRef()



    return ( 
        <>
           <div>
            <div>
                <h2>SIGN IN</h2>
                  <form onSubmit={(e)=>{
                    e.preventDefault()

                    //check if passwords match 
                     
                  if (passwordRef.current.value===passwordRef2.current.value){
                    try{
                      
                      creatAccount(emailRef.current.value, passwordRef.current.value);
                      navigate('/')
                      
                    }
                    catch(err){
                      alert(err)
                    }
                  }else{
                    alert('Passwords Mismatch')
                  }  
                  }}>
                    <div><p>UserName*</p></div> 
                    <div><input type="text" placeholder="johndoe"/></div>

                   <div><p>Email*</p></div> 
                    <div><input ref={emailRef} type="email" placeholder="johndoe@gmail.com"/></div>

                    <div><p>Password*</p></div>
                    <div><input ref={passwordRef} type="password" placeholder="Input password"/></div>
                    <div><p>Confirm Password*</p></div>
                    <div><input ref={passwordRef2} type="password" placeholder="Confirm password"/></div>
                <div>
                    <input type='submit' value='Create account' />
                </div>
                </form>
                 <div>
                    <p>Already have an account?</p>
                    <Link to='/Login'>Login</Link>   
                  </div>
            </div>
        </div>
        </>
     );
}
 
export default SignUp;