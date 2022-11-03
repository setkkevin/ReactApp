import React, {useEffect, useState} from "react";
import { UserService } from "../services/UserService";

let UserList = () => {

    let [state, setState] = useState({

        users : []

    });

    useEffect(() => { 

        UserService.getAllUsers().then((response)=> {
            
            setState({

                ...state,
                users: response.data

            })

        }).catch( (error)=> {
            console.log(error);

        });
  
      }, []);

    return (
        <>
        User List
        <pre>{JSON.stringify(state.users)}</pre>
        </>
    )
};
 export default UserList;