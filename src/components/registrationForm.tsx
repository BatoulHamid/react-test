
import { formInputList } from "../data";
import { IUserData } from "../interfaces";

interface IProps{
    isLoged:boolean;
    setIsLoged:(valu:boolean)=>void;
    userData:IUserData;
    setData:(user:IUserData)=>void;

}
const RrgistForm = ({setIsLoged,isLoged,userData,setData}: IProps)=>{
 
 //**handlers */
 const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name}= event.target;
    setData({
        ...userData,
    [name]:value,
    });
 };
  //**render */
const renderFormInputList= formInputList.map((input,idx)=>(
 
    <div key={idx}>
           
    <label 
    htmlFor={input.label}

    >{input.label}</label>
    <input 
    
    type={input.type} 
    name={input.name}
     id={input.id} 
     value={userData[input.name]}
     onChange={onChangeHandler}
    />
    </div>
    
));
 





    return(
    
    <form style={{margin:30}} onSubmit={(event)=>event.preventDefault}>
  
 {renderFormInputList}
    <br/>
    <button onClick={()=>{ setIsLoged(!isLoged)}}>
        Login</button>

    </form>
    );
};
export default RrgistForm ;