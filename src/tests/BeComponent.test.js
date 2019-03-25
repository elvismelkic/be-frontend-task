import React from "react";
import BeComponent from "../components/BeComponent";
import renderer from "react-test-renderer";

it("changes background color when clicked", () => {
  const component = renderer.create(<BeComponent text={""} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger callback
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger callback
  tree.props.onClick();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
