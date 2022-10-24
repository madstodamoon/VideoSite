import React from "react";
import useVariableFont from "react-variable-fonts";
import "./styles.css";
import "./responsive.css";
import { useState } from "react";
import Logo from "./images/Apophenia_LogoA_Legible_White.png";
import Label202001 from "./images/Label2020-01.png";

export default function App() {
  return (
    <>
      <div class="vimeo-wrapper">
        <iframe
          src="https://player.vimeo.com/video/763046666?h=74ea60f1d7&amp;badge=0&amp;background=1&autoplay=1&loop=1&byline=0&title=0"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>

      <div class="logo">
        <img src={Logo} className="logo" alt="ALogo" />
      </div>

      <div>
        <img src={Label202001} className="label" alt="Label" />
      </div>
    </>
  );
}
