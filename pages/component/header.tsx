import React, { useContext, useState } from "react";
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
  const { toggle, setToggle, search, setSearch }: any = useContext(CartContext);

  return (
    <div>
      <Contanier>
        <div className="md:flex justify-between ">
          
          <div className="logo">
            <img src="../images/img.png" alt="logo" />
          </div>

          <div className="home">
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
                className="outline-none border p-2 rounded shadow-lg"
                type="text"
                placeholder="search..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div
              className="text-[24px] bg-slate-100 border p-2 rounded shadow-lg w-14 sm:mt-0 mt-2"
              onClick={() => setToggle(true)}
            >
              <ImCart />
            </div>
            <Link href="/">
              <div className="text-[24px] bg-slate-100 border p-2 rounded shadow-lg w-14 sm:mt-0 mt-2">
                <BiLogInCircle />
              </div>
            </Link>
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
