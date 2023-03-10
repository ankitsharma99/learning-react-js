import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child Constructor ");
  }

  async componentDidMount() {
    // called after render
    // API Calls here [useEffect]
    // console.log("Child componentDidMount " + this.props.name);
    const data = await fetch("https://api.github.com/users/ankitsharma99");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Child componentDidMount");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    const { count } = this.state;
    console.log("Child Render ");
    return (
      <div>
        <h1>Profile Component from Class</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        {/* <button onClick={() => this.setState({ count: count + 1 })}>
          Increment
        </button> */}
      </div>
    );
  }
}

export default Profile;
