import {   sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebese/frisebess.confif";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";





const Loing = () => {
       
       const [errorlogin, setErrorlogin] = useState('')
       const [successlogin, setSuccesslogin] = useState('')
       const emailRef = useRef(null)
      

        const handelLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setErrorlogin('')
        setSuccesslogin('')

       signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
            setSuccesslogin('login succcfull')

        })
        .catch(error =>{
            console.log(error);
            setErrorlogin(error.message);
        })
        }
        
        const handelforgotPassword = () =>{
            const email = emailRef.current.value
            if(!email){
            console.log('pleace provide email', emailRef.current .value)
            return
            }
            else if( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            {
                console.log('please right a valid email')
                return;
            }

            sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert('please check your email')
            })
            .catch(error=>{
                console.log(error.message)
            })
            
        }


    return (
          
       <div className="mt-24">

        <h1 className="text-5xl font-bold text-center">Login now!</h1>
         <div className="hero">
         <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-orange-300">
           <form onSubmit={handelLogin} className="card-body">
               <div className="form-control">
               <label className="label">
                   <span className="label-text">Email</span>
               </label>
               <input type="email" 
               placeholder="email" name="email" 
               ref={emailRef}
                className="input input-bordered" required />
               </div>
               <div className="form-control">
               <label className="label">
                   <span className="label-text">Password</span>
               </label>
               <input type="password" placeholder="password" name="password" 
               className="input input-bordered" required />
               <label className="label">
                   <a onClick={handelforgotPassword} href="#" 
                   className="label-text-alt link link-hover">Forgot password?</a>
               </label>
               </div>
               <div className="form-control mt-6">
               <button  className="btn btn-primary">Login</button>
               </div>
             </form>
               {
                 errorlogin && <p className="p-2 text-center font-bold">{errorlogin}</p>
               }
               {
                  successlogin && <p className="p-2 text-center">{successlogin}</p>
               }
            
               <p>New to the website ? please <Link to='/regster'>Register</Link></p>
           </div>
       </div>
       </div>
         </div>
    );
};

export default Loing;