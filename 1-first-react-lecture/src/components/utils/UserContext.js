import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ankit",
    email: "sharmankit9593@gmail.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
