import type { ICartPage } from "@/components/Molecule/CartPage/CartPage";

const useRandomItem = (productsArray: ICartPage[], numberOfProductsToSelect: number): ICartPage[] => {
    // select random
    const selectedProducts: ICartPage[] = [];
    const copiedProductsArray: ICartPage[] = [...productsArray];

    // selected random and add to array
    for (let i = 0; i < numberOfProductsToSelect; i++) {
        const randomIndex = Math.floor(Math.random() * copiedProductsArray.length);
        selectedProducts.push(copiedProductsArray[randomIndex]);
        copiedProductsArray.splice(randomIndex, 1);
    }

    return selectedProducts;
};


export { useRandomItem };