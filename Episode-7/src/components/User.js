import { useState } from "react";


const User = ({Name}) => {
    
    const [count ] = useState(0);
    const [count2 ] = useState(2);


    return (
    <div className="usre-card">
        <h1> count : {count}</h1>
        <h1> count2 : {count2}</h1>

      <div>Name: {Name}</div>
      <div> Location : gujrat</div>
      <div>Contact : jadvanikhush32@gmail.com </div>
    </div>
  );
};

export default User;