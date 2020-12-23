import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElement,
} from "@testing-library/react";
import App from "../App";

/* test("home work as expected", async () => {
  const { container } = render(<App />);
  const gifLink = await waitForElement(() =>
    container.querySelector(".Gif-Link")
  );
  expect(gifLink).toBeVisible();
}); */

test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { taget: { value: "Inicio" } });

  const button = await screen.findByRole("button");
  fireEvent.click(button);

  const title = await screen.findByText("Inicio");
  expect(title).toBeVisible();
});
