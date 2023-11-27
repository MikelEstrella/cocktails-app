import React from "react";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not-found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find that resource.</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  console.log(error);
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
