import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

     const users = useLoaderData();
 

    // state--> data 
    // state--> loader 
    // use efect
    // fetch --> state set --> set state
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p>fantastic and vodro users</p>
            <div>
                {
                users.map(user => <User key ={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;