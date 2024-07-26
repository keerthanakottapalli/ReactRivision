import React, { Component } from "react";
import "./LifecycleExample.css"; // Importing external CSS file

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "",
      prevCount: null,
    };
    console.log("Constructor: Component is being created.");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: Derived state from props.");
    // Return null to indicate no change in state
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted.");
    this.setState({ message: "Component has been mounted!" });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate: Deciding if the component should re-render."
    );
    // Allow re-rendering if count is different
    return nextState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate: Capture info from the DOM before updates."
    );
    // Capture previous count value
    return prevState.count;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component has been updated.");
    // Use the snapshot to show how much the count has changed
    if (snapshot !== null) {
      this.setState({
        message: `Count changed from ${snapshot} to ${this.state.count}`,
      });
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being unmounted.");
    // Use this method for cleanup tasks
    this.setState({ message: "Component will unmount soon!" });
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleReset = () => {
    this.setState((prevState) => ({ count: 0 }));
  };

  render() {
    console.log("render: Rendering the component.");
    return (
      <div className="container">
        <h1 className="header">Lifecycle Example</h1>
        <p className="message">{this.state.message}</p>
        <div className="counter">
          <p>Count: {this.state.count}</p>
          <button className="button" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="button" onClick={this.handleReset}>
            Reset
          </button>
        </div>
        <div>
          <h2>Explanation of Each Lifecycle Method</h2>

          <p>
            <b>constructor(props):</b> Initializes state and binds methods. It’s
            called when the component is first created.
          </p>
          <p>
            <b>static getDerivedStateFromProps(nextProps, prevState):</b> Called
            right before rendering. It allows the component to update its state
            based on changes in props.
          </p>

          <p>
            <b> componentDidMount():</b>
            Called after the component is mounted. Ideal for making API calls or
            setting up subscriptions.
          </p>

          <p>
            <b>shouldComponentUpdate(nextProps, nextState):</b>
            Determines if the component should re-render based on changes in
            props or state.
          </p>

          <p>
            <b>getSnapshotBeforeUpdate(prevProps, prevState): </b>
            Called right before the changes from the virtual DOM are applied to
            the real DOM. Useful for capturing DOM information.
          </p>

          <p>
            <b>componentDidUpdate(prevProps, prevState, snapshot):</b>
            Called after the component has been updated. Useful for operations
            that need to happen after the DOM is updated.
          </p>

          <p>
            <b>componentWillUnmount():</b>
            Called immediately before the component is unmounted and destroyed.
            Ideal for cleanup tasks.
          </p>
        </div>
      </div>
    );
  }
}

export default LifecycleExample;
