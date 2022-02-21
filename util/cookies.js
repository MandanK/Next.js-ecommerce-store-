import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    const cookie = Cookies.get(key);
    if (cookie) {
      return JSON.parse(cookie);
    }
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key) {
  Cookies.remove(key);
}

export function getItemsInCart(key) {
  const cookie = getParsedCookie(key);
  let num = 0;
  let item;
  for (item in cookie) {
    num += parseInt(cookie[item].quantity);
  }
  return num;
}

export function addShoppingToCookie(key, id, quantity) {
  const cookieValue = getParsedCookie(key) || [];
  const existIdOnArray = cookieValue.some((cookieObject) => {
    return cookieObject.id === id;
  });
  let newCookie;
  if (existIdOnArray) {
    const existingElementIndex = cookieValue.findIndex((e) => {
      return e.id === id;
    });
    cookieValue[existingElementIndex].quantity += quantity;
    newCookie = cookieValue;
  } else {
    newCookie = [...cookieValue, { id: id, quantity: quantity }];
  }
  setParsedCookie(key, newCookie);
}
