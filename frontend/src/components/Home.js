import React from "react";
// eslint-disable-next-line
import axios from "axios";
// eslint-disable-next-line
import { useFetchers } from "react-router-dom";
// eslint-disable-next-line
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line
const url = "http://localhost:5000/read"
const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Tuder</h1>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("/signup")
            }}
          > Sign Up</button>
        </li>
          <button
            onClick={() => {
              navigate("/signin")
            }}
          > Log In</button>
      </ul>
    </div>
  );
};

export default Home;
