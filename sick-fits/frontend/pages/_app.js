import App, { Container } from "next/app";

class Root extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Component />
      </Container>
    );
  }
}

export default Root;
