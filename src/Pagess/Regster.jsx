import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebese/frisebess.confif";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";





const Regster = () => {

      const [registererror, setRegistererror] = useState('');
      
      const [successfull, setsuccessfull] = useState('');

      const [showpassword, setShowpassword] = useState(false);


     const handelRegister = (e) =>{
        e.preventDefault();
       const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.terms.checked;
        console.log(email, password, accept)
     


       setRegistererror('');
       setsuccessfull('');
     
       

        if(password.length < 6){
          setRegistererror('password should be must 6 characters')
          return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegistererror('password should be must uppercase characters')
            return;
        }
        else if(!accept){
          setRegistererror('Please accept our terms or condition')
          return;
        }


        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user
          console.log(user)
          setsuccessfull('successful registration!')
        })
        .catch(error => {
          console.log(error);
          setRegistererror(error.message);
        })
         
      
       

     }

    return (
        <div className="justify-center items-center">
        <h2 className="text-3xl text-center">Pless Regster</h2>
          

          
    
       <form  onSubmit={handelRegister} className="py-10 space-y-6 text-center">
         {/* xs */}
         <input type="email" placeholder="Email" required name="email" className="input input-bordered input-md w-full max-w-xs"/>
        {/* sm */} <br></br>
          
          <div className="relative mb-4">
          <input type={ showpassword ? "text" : "password"}
          placeholder="password" 
          required name="password" 
          className="input input-bordered input-md w-full max-w-xs"/>
          <span className="absolute top-4 -ml-6" onClick={()=> setShowpassword(!showpassword)}>
            {
              showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
         </span>
         </div>
        <br></br>
        <div className="mb-2">
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2 text-sm" htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
        </div>

        {/* md */}<br></br>
        <button className="btn bg-primary text-white text-3xl w-full max-w-xs">Register</button>
       </form>
         {
           registererror && <p className="text-2xl text-red-600 text-center">{registererror}</p>
         }
         {
             successfull  && <p className="text-3xl text-green-600 text-center">{successfull}</p>
         } 
         

        </div>
    );
};

export default Regster;