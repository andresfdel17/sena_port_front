
import React from 'react';
import LogoSena from "../../assets/img/sena.png";
import stylesString from "./Login.module.css";

export const Login = () => {

  return (
    <div>
      <div className="collapse d-flex flex-column flex-md-row align-items-center p-3 px-md-4 purple shadow-sm">
        <h5 style={{ fontSize: "2rem" }} className="purple mx-auto pt-2 pb-2 text-light text-center mb-0 align-middle">
          <h5 style={{ fontSize: "3rem" }} className=" mt-0 mb-0 text-light text-center mb-0 align-middle">
            <img width="150px" src={LogoSena} alt="" />
          </h5>
        </h5>
      </div>
    </div>
  )
}