export const handleImageClick = (e, setImageOfProduct) => {
  e.preventDefault();
  const imageOfProduct = document.getElementById('productImage');
  imageOfProduct.value = null;
  e = imageOfProduct.click();
  imageOfProduct.addEventListener('change', async (e) => {
    setImageOfProduct(e.target.files[0]);
  });
};
