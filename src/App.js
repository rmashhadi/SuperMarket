import React, { Component } from "react";
import "./App.scss";
import { Helmet } from "react-helmet";
import Page3 from "./Components/Page3";

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta http-equiv="”Content-Language”" content="”fa”" />
          <meta charset="utf-8" />
          <meta http-equiv="Content-type" Content="text/html ; charset=utf-8" />
        </Helmet>
        <Page3 />
      </>
    );
  }
}

export default App;
