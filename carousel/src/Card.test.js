import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders without crashing", function () {
    render(<Card caption={TEST_IMAGES.caption} src={TEST_IMAGES.src} currNum="1" totalNum="3" />);
});

// snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(<Card caption={TEST_IMAGES.caption} src={TEST_IMAGES.src} currNum="1" totalNum="3" />);
    expect(asFragment()).toMatchSnapshot();
});