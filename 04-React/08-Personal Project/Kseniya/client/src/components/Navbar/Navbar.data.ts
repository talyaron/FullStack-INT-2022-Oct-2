import {
  ACCOUNT_PATH,
  ADMIN_PATH,
  JOIN_PATH,
  SIGNIN_PATH,
} from "../../routes/routeData";

export const NAVBAR_ELEMENTS = [
  {
    title: "Sign in",
    path: SIGNIN_PATH,
    isPrivate: false,
  },
  {
    title: "Join",
    path: JOIN_PATH,
    isPrivate: false,
  },
  {
    title: "Account",
    path: ACCOUNT_PATH,
    isPrivate: false,
  },
  {
    title: "Admin",
    path: ADMIN_PATH,
    isPrivate: true,
  },
];
