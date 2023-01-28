import Swal from 'sweetalert2';

export const onDeleteProduct = async ({
  db,
  uid,
  setAllProductsLocal,
  allProdutsLocal,
  storage,
  setLocalLoading,
}) => {
  try {
    Swal.fire({
      title: '¿Estas seguro de eliminar este producto?',
      showCancelButton: true,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setLocalLoading(true);
        await db
          .collection('products')
          .doc(uid)
          .delete()
          .then(() => {
            console.log('eliminado');
            const newProducts = allProdutsLocal.filter((product) => product.uid !== uid);
            setAllProductsLocal(newProducts);
          });
        const storageRef = storage.ref();
        const desertRef = storageRef.child(`products/product_${uid}.jpeg`);
        await desertRef.delete().then(() => {
          console.log('imagen eliminada');
          setLocalLoading(false);
        });

        Swal.fire('Producto eliminado correctamente', '', 'success');
      } else if (result.isDenied) {
        console.log('no se elimino');
        setLocalLoading(false);
      }
    });
  } catch (error) {
    console.log(error);
    setLocalLoading(false);
  }
};
