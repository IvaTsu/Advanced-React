import App, { Container } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import Page from "../components/Page/index";

Router.routeChangeStart = () => {
  NProgress.start();
};
Router.routeChangeComplete = () => {
  NProgress.done();
};
Router.routeChangeError = () => {
  NProgress.done();
};

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
