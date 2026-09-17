export type ProductType = {
      id: string,
      title: string,
      image: string,
      desc: string,
      price: string
}

export type BasketProductType = {
      totalPrice: number,
      amount: number,
} & ProductType