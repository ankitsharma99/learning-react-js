import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
// import ProfileFunctional from "./Profile";
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

    // console.log("Parent Constructor");
  }
  componentDidMount() {}
  render() {
    // console.log("Parent Render");
    return (
      <div className="p-5 flex justify-center">
        <h1 className="text-2xl">About Us Page</h1>
        <h3>Welcome to FoodVilla</h3>
        <Profile name="First Child" />
        {/* <Profile name="Second Child" /> */}
      </div>
    );
  }
}

export default About;

/**
 * Console.log Output sequence:
 *  - Parent Constructor
 *  - Parent Render
 *    - First Child Constructor
 *    - First Child Render
 *    - Second Child Constructor
 *    - Second Child Render
 *    - First Child componentDidMount
 *    - Second Child componentDidMount
 *  - Parent componentDidMount
 */
