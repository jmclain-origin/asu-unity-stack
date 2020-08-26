/** @jsx h */
/* eslint-disable react/prop-types */
import { h, Fragment } from "preact";
import * as S from "./styles";
import PropTypes from "prop-types";

const Login = ({ loggedIn, loginLink, logoutLink, userName, ...props }) => {
  return (
    <S.Login class={props.class}>
      {loggedIn ? (
        <>
          {userName ? <span class="name">{userName}</span> : ""}
          <a class="signout" href={logoutLink}>
            Sign Out
          </a>
        </>
      ) : (
        <a href={loginLink}>Sign in</a>
      )}
    </S.Login>
  );
};

Login.propTypes = {
  class: PropTypes.string,
  loggedIn: PropTypes.bool.isRequired,
  loginLink: PropTypes.string,
  logoutLink: PropTypes.string,
  userName: PropTypes.string,
};

Login.defaultProps = {
  loginLink: "/cas", // default paths are Drupal
  logoutLink: "/caslogout",
  loggedIn: false,
};

export { Login };
