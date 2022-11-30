import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BsCartCheckFill, BsLightningFill } from "react-icons/bs";
import styled from "styled-components";
import { getProductID } from "../../network/product-get.tsx";
import { FaArrowLeft } from "react-icons/fa";
import CartProvider, { CartContext } from "../context/context";
import Header from "../component/header";
import Link from "next/link";

const Post = () => {
  const [list, setList] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  const router = useRouter();
  const id = router.query;

  const fetchAPI = async () => {
    try {
      const res = await getProductID(id.id);
      setList(res);
      console.log(res, "kkk");
    } catch (err) {
      console.log("ERROR ---:", err);
    }
  };
  useEffect(() => {
    if (id?.id) {
      fetchAPI();
    }
  }, [id]);

  return (
    <CartProvider>
      
      <Root>
        <div className="sm:grid grid-cols-2 gap-10 p-10">
          <div className="">
            <Link href="/products">
              <div className="text-[20px]">
                <FaArrowLeft />
              </div>
            </Link>
            <div className="flex flex-col items-center">
              <div className="h-80">
                <img
                  className="w-full h-full object-contain"
                  src={list?.image}
                  alt="logo"
                />
                <div className="flex gap-4 mt-4">
                  <div>
                    <div
                      onClick={() => {
                        setCart((s: any) => {
                          return [...s, list];
                        });
                      }}
                      className="flex items-center gap-2 p-2 rounded shadow-lg text-white font-bold"
                      style={{ background: "#ff9f00" }}
                    >
                      <BsCartCheckFill />
                      <button>Add to cart</button>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-2 p-2 rounded shadow-lg text-white font-bold"
                    style={{ background: "#fb641b" }}
                  >
                    <BsLightningFill />
                    <button> Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:mt-0 mt-10">
            <div className="text-[30px] font-semibold">{list?.title}</div>
            <div className=" font-bold text-[24px]">₹{list?.price}</div>
            <div className="flex gap-2 items-center ">
              <div className="mt-2 bg-green-700 px-3 text-white rounded-sm shadow-lg">
                {list?.rating?.rate} ✰
              </div>
              <div className="mt-2">({list?.rating?.count})</div>
              <div className="mt-2 w-20 ">
                <img src="../images/img.png" alt="logo" />
              </div>
            </div>
            <div className="mt-4 text-[16px]">{list?.description}</div>
            <div>
              <p className="mt-4 font-semibold text-end">
                {" "}
                7 Days Replacement Policy{" "}
              </p>
            </div>
          </div>
        </div>
      </Root>
    </CartProvider>
  );
};

export default Post;
const Root = styled.div`
  padding: 20px;
  margin: auto;
`;
