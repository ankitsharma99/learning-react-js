import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("constructor");
  }

  componentDidMount() {
    // called after render
    // API Calls here [useEffect]
    console.log("component did mount");
  }

  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <div>
        <h1>Profile Component from Class</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Profile;
