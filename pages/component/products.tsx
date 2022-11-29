import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getProduct } from "../network/product-get.tsx";
import { BsCartCheckFill, BsLightningFill } from "react-icons/bs";
import Link from "next/link";
import Header from "./header";

function Products() {
  const [list, setList] = useState<any>([]);
  const [cart, setCart] = useState<any>([]);

  const fetchAPI = async () => {
    try {
      const res = await getProduct();
      setList(res);
    } catch (err) {
      console.log("ERROR :", err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <Header />
      <Root>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5">
          {list.map((i: any) => {
            return (
              <div key={i.id}>
                <div className="card">
                  <a href={`products/${i.id}`}>
                    <div className="contanier">
                      <div className="h-80 ">
                        <img
                          className="w-full h-full object-contain"
                          src={i.image}
                        />
                      </div>
                    </div>
                  </a>

                  <div className="mt-6"> {i.title}</div>
                  <div className="flex gap-2 items-center ">
                    <div className="mt-2 bg-green-700 px-3 text-white rounded-sm shadow-lg">
                      {i.rating.rate} ✰
                    </div>
                    <div className="mt-2">({i.rating.count})</div>
                    <div className="mt-2 w-20 ">
                      <img src="./images/img.png" alt="logo" />
                    </div>
                  </div>
                  <div className="mt-4 font-bold text-[16px]">₹{i.price}</div>
                  <div className="font-semibold">{i.category}</div>
                  <div className="flex gap-4">
                    <div>
                      <div
                        onClick={() => {
                          setCart((s: any) => {
                            return [...s, i];
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
            );
          })}
        </div>
      </Root>
    </div>
  );
}

export default Products;

const Root = styled.div`
  margin: auto;

  margin-top: 10%;
  margin-bottom: 10%;
  padding: 30px;

  .contanier {
    position: relative;
    width: 100%;
  }
  .card {
    background-color: white;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin: auto;
    height: 100%;
    padding: 10px;
  }
`;
