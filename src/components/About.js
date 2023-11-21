import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h3>
        This page contained the brief description of developer of this App.
      </h3>
      <UserClass name = {"Swaraj (class)"} location = {"Bhubaneswar"}/>
    </div>
  );
};

export default About;
