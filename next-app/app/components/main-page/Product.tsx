'use client'

import { Iproduct } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PropsType = {
  product: Iproduct
}

function Product({product}:PropsType) {
  const router = useRouter()

  const goToBarleyPage = () => {
    router.push(`/product/${product.id}`)
  }

return (
    <div data-testid={product.id} className="character" onClick={goToBarleyPage}>
        <Image 
            src={`/images/${product.image}`} 
            width={300} 
            height={300} 
            alt="character.name"
            loading="eager"
             />
        <p>Name: {product.name}</p>
        <p>$: {product.price}</p>
        <p>{product.shortDescription}</p>
    </div>
)
}

export default Product