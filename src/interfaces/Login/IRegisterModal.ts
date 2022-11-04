import React from "react";

export interface IRegisterModal {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
