import App, { Container } from "next/app";
import Page from "./../components/Page";

class Root extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default Root;
