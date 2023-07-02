import React from "react";
import UserContext from "../utils/UserContext";
// Firstly the consttructor will be Called
// then render method
// then componentDidMount
// componentDidMount is the best place to make an API call -> Because it's after Render
// Initialise state in constructor- bcz constructor is called in first place

class ProfileCls extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy Location",
      },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    console.log();
    const data = await fetch("");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("comp-did mount");
  }

  componentDidUpdate() {
    console.log("comp did update");
  }
  componentWillUnmount() {
    console.log("will unmount");
  }
  //Most imp part is render method
  render() {
    console.log("render method called");

    return (
      <div>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name}-{user.email}
            </h4>
          )}
        </UserContext.Consumer>
        ;<h1>Profile class component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
  // render() {
  //   const { active } = this.state;
  //   return (
  //     <div>
  //       <h1>Profile Class Component</h1>
  //       <h3>Name: {this.props.name}</h3>
  //       <h3>{this.state.count}</h3>
  //       <h3>{active}</h3>
  //       <button
  //         onClick={() => {
  //           this.setState({
  //             count: 2,
  //             //   can update all var together
  //           });
  //         }}
  //       >
  //         SetCount
  //       </button>
  //     </div>
  //   );
  // }
}
export default ProfileCls;
