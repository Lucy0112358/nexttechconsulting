import React from "react";
import Head from "../Styled/Header.styled";
import SiteLogo from "../images/logo.png";
import '../styles/menu.css';

export default function Menu() {
  return (
    <Head>
      <img className="site-logo" alt="Logo" src={SiteLogo} />
      <div>Home</div>
      <div>What we do</div>
      <div>Service</div>
      <div>Project</div>
      <div>Blog</div>
      <div>Contact</div>
    </Head>
  );
}
