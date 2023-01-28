export const recoverDataProducts = async ({ db, setLocalLoading }) => {
  setLocalLoading(true);
  let productsRecover = [];
  const products = await db.collection('products').get();
  products.forEach((product) => {
    productsRecover.push(product.data());
  });
  return productsRecover;
};
