import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const param = useParams()
  return (
    <div>
      {param.id}
    </div>
  )
}

export default ProductDetails;
