import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../utils/store";
import { MENU_DATA } from "../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const buttons = body.getAllByTestId("add-btn");
  fireEvent.click(buttons[0]);

  const cart = body.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart - 1 items");
});
