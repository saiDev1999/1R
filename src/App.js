import { Component } from "react";
import NavigationStack from "./navigation/navigation-stack";
import CircleGenerator from "./components/functional/circle/circleGenerator";

class App extends Component {
  state = {
    color: "red",
  };

  changeColor = () => {
    this.setState({
      color: "blue",
    });
  };
  render() {
    return <NavigationStack />;
  }
}

export default App;
