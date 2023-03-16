import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getAllByTestId("logo");

  // console.log(logo[0].src);

  // check if logo is loaded
  expect(logo[0].src).toBe(
    "https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
  );
});

test("Online status should be 'online' on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");
  // check if online status is online
  expect(onlineStatus.innerHTML).toBe(`✅`);
});


test("Cart Should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  // check if cart has 0 items
  expect(cart.innerHTML).toBe(`Cart - 0 items`);
});