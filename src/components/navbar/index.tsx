import './index.scss'


const styles = {
    ulStyle:{
        listStyle:"none", 
        display:"flex" ,
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"red"
    }

}
interface IProps{
    companyN:string;
    aboutTxt:string; 
    isLoged:boolean; 
    setIsLoged:(valu:boolean)=>void;
}

const Navbar = ({companyN,aboutTxt, isLoged , setIsLoged}:IProps) =>{

return(
    <ul className='ulmenu' style={styles.ulStyle}>
         <li><a href='/'>{companyN}</a></li>
     <li><a href='/'>home</a></li>
     <li><a href='/'>{aboutTxt}</a></li>
     <li><a href='/'>page2</a></li>
     <button onClick={()=>{ setIsLoged(!isLoged)}}>
        {isLoged? "logout" : "login"}</button>  
       
    </ul>
   
);

};
export default Navbar;