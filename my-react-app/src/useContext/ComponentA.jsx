import ComponentB from "./ComponentB";
import React, {useState, createContext} from "react";

export const UserContext = createContext();

function ComponentA(){
    
    const [user, setUser] = useState("John");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h3>Hello, {user}!</h3>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );

}

export default ComponentA;