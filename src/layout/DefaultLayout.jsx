import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const DefaultLayout=() => {
  return (
         <>
         {/* this is the header */}
         <Header/>

          

         <main className="main"><Outlet/></main>
         {/* this is the footer */}
          <Footer/>
         </>
  );
}
export default DefaultLayout;