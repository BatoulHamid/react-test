
import { useState } from "react";

interface IProps{
    isLoged:boolean;
    setIsLoged:(valu:boolean)=>void;
}
const LoginForm = ({setIsLoged,isLoged}: IProps)=>{
 const [email,setEmail]= useState('')  ;
 const [password,setPassword]= useState('')  ;
    
    return(
    
    <form style={{margin:30}} onSubmit={(event)=>event.preventDefault}>
        <div>
            <h3>{email}</h3>
    <label htmlFor="" >Email:</label>
    <input type="email" name="email" id="email" value={email} 
    onChange={event=>{setEmail(event.target.value);}}
    />
    </div>
    <br/>
    <br/>
    <div>
    <label htmlFor="">password:</label>
    <input type="password" name="password" id="password" 
    value={password} 
    onChange={event=>{setPassword(event.target.value);}}
    
    />
    </div>
    <br/>
    <button onClick={()=>{ setIsLoged(!isLoged)}}>
        Login</button>

    </form>
    );
};
export default LoginForm;