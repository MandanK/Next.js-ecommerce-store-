// import { getParsedCookie } from './cookies';
// import { getProducts } from './database';
import { CartItem } from './cookies';

export type Animal = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export function cartSum(key: string, cart: CartItem[], animals: Animal[]) {
  // const cart = getParsedCookie(key);
  // const products = await getProducts();
  const detailedCart = [];
  for (const animal of cart) {
    const found = animals.find((element) => element.id === animal.id);
    if (found) {
      detailedCart.push({
        id: animal.id,
        name: found.name,
        qty: animal.quantity,
        price: found.price,
      });
    }
  }
  console.log(animals);
  console.log('det cart' + JSON.stringify(detailedCart));
  let newTotal = 0;
  for (const element of detailedCart) {
    newTotal += element.price * element.qty;
  }
  console.log('total price' + newTotal);
  return newTotal;
}
