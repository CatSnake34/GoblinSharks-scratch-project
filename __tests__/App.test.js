import React from "react";
import { render } from "@testing-library/react";
import { App } from "../client/App";

describe("App Component", function () {
    it ("it should not have nav bar if the user hasn't signed in", function () {
      let { getByText } = render(<App />);
      expect (getByText())

    })
  });