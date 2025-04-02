import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // const para = document.createElement("div");
  const { debug, baseElement } = render(
    <App />
    // {
    //   container: document.body.appendChild(para),
    // }
  );
  // debug(baseElement);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
