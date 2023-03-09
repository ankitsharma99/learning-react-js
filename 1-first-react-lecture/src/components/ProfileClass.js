import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile Component from Class</h1>
        <h2>Name: {this.props}</h2>
      </div>
    );
  }
}

export default Profile;
