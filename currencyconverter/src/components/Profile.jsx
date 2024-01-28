import React,{useContext} from "react"
import contextVariable from "../Context/userContext"

function Profile() {

    const{user}=useContext(contextVariable)
if (!user) {
    return <h2>log in please</h2>
}
return <div>welcome {user.username} your password is {user.password}</div>
 /*else if(user===user.username || user ===user.password){   
}*/
}

export default Profile
