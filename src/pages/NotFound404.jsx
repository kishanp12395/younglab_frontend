import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound404 = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 text-danger">404</h1>
      <h2 className="display-4">Page Not Found</h2>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
};

export default NotFound404;
