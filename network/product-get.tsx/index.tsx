import { get } from "../index"


export const getProduct =() =>{
return get({
  route: '/products',
})
}

export const getProductID = (id:any) =>{
  return get({
    route: `/products/${id}`
  })
}