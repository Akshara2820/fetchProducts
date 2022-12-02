import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ImCart } from "react-icons/im";
import { BiLogInCircle } from "react-icons/bi";
import AddToCart from "./cart";
import { CartContext } from "../context/context";
import { FaHome, FaCoins, FaMobileAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { GiLargeDress } from "react-icons/gi";
import { MdSmartToy } from "react-icons/md";
import Link from "next/link";

const Items = [
  { name: "Home", icon: <FaHome />, rang: "#15F4A7" },
  { name: "Categories", icon: <BiCategory /> },
  { name: "OfferZone", icon: <FaCoins /> },
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Fashion", icon: <GiLargeDress /> },
  { name: "Toys & Baby", icon: <MdSmartToy /> },
];




function Header() {
  const { toggle, setToggle, search, setSearch, count, setCount,cart,setCart }: any =
    useContext(CartContext);
  return (
    <div className="bg-gray-800  ">
      <Contanier>
        <div className="md:flex justify-between ">
          <div className="logo">
            <img src="../images/img.png" alt="logo" />
          </div>

          <div className="home text-gray-300">
            <ul className="flex gap-4 ">
              {Items.map((i: any) => {
                return (
                  <div key={i.name}>
                    {i.ss}
                    <div className="flex justify-center text-[18px]">
                      {i.icon}
                    </div>
                    <div className="text-[16px] font-semibold">{i.name}</div>
                  </div>
                );
              })}
            </ul>
          </div>

          <div className="sm:flex items-center gap-4 mt-4 sm:mt-0">
            <div>
              <input
                className="outline-none border p-2 rounded shadow-lg bg-gray-300 bg-opacity-0 text-white"
                type="text"
                placeholder="search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex gap-2 sm:mt-0 mt-2">
              <div
                className="text-[24px] text-gray-300 p-2 rounded shadow-lg w-14 sm:mt-0 mt-2"
                onClick={() => setToggle(true)}>
                <ImCart />
              </div>
              <div className="bg-red-600 text-center w-6 rounded-full absolute z-10  ml-7 text-white font-bold">{count}
              </div>

              <Link href="/">
              <div className="text-[24px] text-gray-300 p-2 rounded shadow-lg w-14 sm:mt-0 mt-2">
                <BiLogInCircle />
              </div>
            </Link>


            </div>

            
          </div>
        </div>

        {toggle ? <AddToCart /> : ""}
      </Contanier>
    </div>
  );
}






export default Header;
const Contanier = styled.div`
  padding: 20px;
  margin: auto;

  .logo {
    width: 150px;
  }
  .home {
    @media (max-width: 769px) {
      display: none;
    }
  }
`;
