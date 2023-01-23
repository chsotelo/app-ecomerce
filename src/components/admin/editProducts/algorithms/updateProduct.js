export const updateProduct = async (storage, firestore, data, image, setLocalLoading, uuid) => {
  setLocalLoading(true);
  const { category, discount, description, price, title, stock, mark, color, weight } = data;

  let urlImage;
  const newData = {
    description,
    price: parseFloat(price),
    title,
    stock: parseFloat(stock),
    mark,
    color: color ? color : null,
    weight: weight ? weight : null,
    category,
    discount: parseFloat(discount),
    uid: uuid,
  };
  if (image) {
    urlImage = await newProductPhoto(storage, image, uuid);
    newData.photoUrl = urlImage;
  }
  const batch = firestore.batch();
  const productsRef = firestore.collection('products').doc(uuid);

  batch.set(productsRef, newData, { merge: true });

  batch.commit();
};

const newProductPhoto = async (storage, productPhoto, uuid) => {
  let storageRef = storage.ref();
  try {
    let initialType = productPhoto.type.substr(0, 5);
    if (productPhoto && initialType === 'image') {
      let imageRenamed = new File([productPhoto], `product_${uuid}.jpeg`, { type: 'image/jpeg' });
      let routePath = `products/${imageRenamed.name}`;
      //si la imagen existe en storage, eliminarla
      let imageRef = storageRef.child(routePath);
      await imageRef.delete().catch((error) => {
        console.log('no existe la imagen');
      });

      let uploadTask = storageRef.child(routePath).put(imageRenamed);
      // uploadTask.on('state_changed', (result)=>{
      // let progress = (result.bytesTransferred/result.totalBytes) * 100
      // console.log('Subido' + progress + '%')
      // })
      await uploadTask.then(async () => {
        console.log('upload success');
        // window.location.reload()
      });
      //retornar el url de la imagen
      return await storageRef.child(routePath).getDownloadURL();
    }
  } catch (error) {
    console.log(error);
  }
};
