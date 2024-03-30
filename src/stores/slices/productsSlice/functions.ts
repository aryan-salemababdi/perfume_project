
export const sumPrice = (products: any) => {
    return products
        .reduce((total: number, product:any) => total + product.price * products.quantity, 0)
        .toFixed(2);
};

export const sumQuantity = (products: []) => {
    return products.reduce((counter: number, product: any) => counter + product.quantity, 0)
}