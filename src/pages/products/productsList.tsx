import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { FETCH_PRODUCTS, type IProduct } from "../../features/products/products.slice";
import { selectProducts } from "../../features/products/productSelector";
import { Card } from "@mui/material";


const Products = () => {
  const dispatch = useDispatch();
  const procucts = useSelector(selectProducts);
  useEffect(() => {
    // dispatch({ type: FETCH_CATEGORIES });
    dispatch({ type: FETCH_PRODUCTS });
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Products</h1>
      <p className="text-lg text-gray-600">Welcome to the products page!</p>
      {procucts? procucts.map((product: IProduct) => {
        return <Card>
          {product.brand}
        </Card>
      }): []}
    </div>
  )
}

export default Products
