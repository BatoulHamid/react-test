export interface IUserData{
    userName:string,
        email:string,
        address:string,
        password:string, 
   
}

export interface IFormInput{
    label:string,
        type:string,
        name:keyof IUserData,
        id:string, 
   
}