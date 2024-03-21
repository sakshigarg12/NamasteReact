import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>count : {count}</h1>
            <h1>count2: {count2} </h1>
            <h2>name : {name}</h2>
            <h3>email : garg.sakshi</h3>
            <h4>phone : 8487385</h4>
        </div>
    )
}

export default User;