export const onEditProduct = ({ productSelected, setProductSelectedForEdit, e }) => {
  setProductSelectedForEdit(null);
  setProductSelectedForEdit(productSelected);
};
