import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//grouping all test cases under a single function
describe("Contact component test cases", () => {
  test("should load text-id which is 'name' in Contact component", () => {
    render(<Contact />);
    const textid = screen.getByTestId("name");

    //Assertion
    expect(textid).toBeInTheDocument();
  });

  test("should load 'pswaraj96@gmail.com' text Contact component", () => {
    render(<Contact />);
    const mail = screen.getByText("pswaraj96@gmail.com");

    //Assertion
    expect(mail).toBeInTheDocument();
  });

  test("should load all heading in Contact component", () => {
    render(<Contact />);
    const headings = screen.getAllByRole("heading");

    //Assertion
    expect(headings.length).toBe(2);
    console.log(headings.length); //2
  });
});
