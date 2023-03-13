import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ankit",
    email: "sharmankit9593@gmail.com",
  },
});

export default UserContext;
