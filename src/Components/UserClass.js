import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        avatar_url : "",
        name: "dummy",
        location: "default",
      },
      // count:0,
      // count2 : 2
    };

    // console.log("child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " child did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
  
  componentWillUnmount(){
    console.log("unmount");
  }


  render() {
    const { name, location,  avatar_url } = this.state.userInfo;
    // console.log("child render");

    return (
      <div className="user-card">
        <img src={avatar_url} alt="not found"></img>
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Phone : 848738545</h3>
      </div>
    );
  }
}

export default UserClass;

// google ux design product design by google udacity introduction to ux design by georgia university
// const {count, count2} = this.state;

   {/* <h1>count: {count} </h1> */}
        {/* <button onClick={() => {
                this.setState({
                    count : count + 1,
                    count2 : count2 + 1
                })
            }
                
            }>Count</button> */}