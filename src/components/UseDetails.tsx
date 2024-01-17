import { IUserData } from "../interfaces";
interface IProps {
    user:IUserData;
}

const userDetails = ({user}:IProps )=>{
return (
<h3> hello {user.userName}</h3>
);
};

export default userDetails;