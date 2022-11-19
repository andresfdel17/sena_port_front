import { ILogo } from '@interfaces/Login'
import React from 'react'
import logo from "../../assets/img/sena.png";

export const Logo = (props: ILogo) => {
  return (
    <>
        <img className={props.className ?? ''} width={props.width} src={logo} alt="logo" />
    </>
  )
}
