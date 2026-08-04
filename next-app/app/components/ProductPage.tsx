'use client'

import { Iproduct } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type PropsType = {
  product: Iproduct
}

function ProductPageComponent({product}:PropsType) {
  const router = useRouter()

return (
    <div data-testid={product.id} className="character">
        <Image 
            src={`/images/${product.image}`} 
            width={300} 
            height={300} 
            alt="character.name"
            loading="eager"
             />
        <p>Name: {product.name}</p>
        <p>$: {product.price}</p>
        <p>{product.description}</p>
        <button>Add to card</button>
    </div>
)
}

export default ProductPageComponent