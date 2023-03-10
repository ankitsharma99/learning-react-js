import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctional from "./Profile";
// const About = () => {
//   return (
//     <div>
//       <h1>About Us page</h1>
//       <p>Welcome to foodVilla</p>
//       {/* <Outlet /> */}
//       <ProfileFunctional name={"Ankit"} />
//       <Profile name={"Ankit Class"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <h3>Welcome to FoodVilla</h3>
        <ProfileFunctional name="Ankit" />
        <Profile />
      </div>
    );
  }
}

export default About;
