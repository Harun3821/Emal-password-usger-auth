import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebese/frisebess.confif";




const Regster = () => {

     const handelRegister = (e) =>{
        e.preventDefault();
       const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          console.log(result.user)

        })
        .catch(error =>{
            console.log(error)
        })


       

     }

    return (
        <div className="justify-center items-center">
        <h2 className="text-3xl text-center">Pless Regster</h2>
          

          
    
       <form  onSubmit={handelRegister} className="py-10 space-y-6 text-center">
         {/* xs */}
         <input type="email" placeholder="Email" name="email" className="input input-bordered input-md w-full max-w-xs"/>
        {/* sm */} <br></br>
        <input type="password" placeholder="password" name="password" className="input input-bordered input-md w-full max-w-xs" />
        {/* md */}<br></br>
        <button className="btn bg-primary text-white text-3xl w-full max-w-xs">Register</button>
       </form>
         


        </div>
    );
};

export default Regster;