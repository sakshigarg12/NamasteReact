import { Component } from "react"; 
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    //used for api call
    // console.log("parent did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>Namaste Food</h1>
        <h2>This is about us page</h2>
        <UserClass name={"Sakshi garg"} location={"Gurgaon"} />
        {/* <UserClass name={"Nidhi"} location={"Delhi"} /> */}
      </div>
    );
  }
}

export default About;


// parent constructor
// About.js:19 parent render
// child constructor
// child render
// child constructor
// child render
// Sakshi garg child did mount
// Nidhi child did mount
// parent did mount