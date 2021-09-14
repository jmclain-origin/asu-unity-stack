// @ts-check
import React from "react";

import { useAppContext } from "../../../core/context/app-context";
import { LoginWrapper } from "./index.styles";

const Login = () => {
  const { loggedIn, userName, logoutLink, loginLink, breakpoint } =
    useAppContext();

  return (
    // @ts-ignore
    <LoginWrapper className="nav-link" breakpoint={breakpoint}>
      {loggedIn ? (
        <>
          {userName ? (
            <span className="name" data-testid="user-name">
              {userName}
            </span>
          ) : (
            ""
          )}
          <a className="signout" href={logoutLink}>
            Sign Out
          </a>
        </>
      ) : (
        <a href={loginLink}>Sign In</a>
      )}
    </LoginWrapper>
  );
};

export { Login };
