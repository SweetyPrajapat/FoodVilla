import { useState } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h1 className="my-6">
        Providing the best Quality food and best Services at your door.
      </h1>

      <p>We are just a click away.</p>
      {/* <h3>Name: {props.name}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(2)}>click me</button> */}
    </div>
  );
};

export default Profile;
