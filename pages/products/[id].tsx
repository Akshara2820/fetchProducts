import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductID } from "../network/product-get.tsx";

const Post = () => {
  const [list, setList] = useState([]);
  const router = useRouter();
  const id = router.query;
  console.log(id,'id');
  

  const fetchAPI = async () => {
    try {
      const res = await getProductID(id.id);
      setList(res);
      console.log(res,'kkk');
      
    } catch (err) {
      console.log("ERROR ---:", err);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, [id]);

  return (
    <div>
      <Root>
        <div className="grid grid-cols-2 gap-10">
          <div></div>
        </div>

      </Root>
    </div>
  );
};

export default Post;
const Root = styled.div``;
