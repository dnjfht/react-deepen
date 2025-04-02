import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StateBasic from "./StateBasic";

test("버튼을 클릭했을 때 count state가 1씩 증가한다!", async () => {
  const event = userEvent.setup();
  render(<StateBasic init={0} />);

  const btn = screen.getByRole("button", { name: "카운트" });
  const comment = screen.getByText(/클릭/);

  event.click(btn);
  await waitFor(() => {
    expect(comment).toHaveTextContent("1번");
  });
});
