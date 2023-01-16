import { v4 as uuidv4 } from 'uuid';

export const sendProducts = async(storage, firestore, data, image) => {
    const {category, discount, description, price, title, stock, mark, color, weight} =  data
    const uuid = uuidv4()

    newProductPhoto(storage, image, uuid)
    const batch = firestore.batch()
    const productsRef = firestore.collection("products").doc(uuid)
    
    batch.set(
        productsRef,
        {
            description,
            price: parseFloat(price),
            title,
            stock: parseFloat(stock),
            mark,
            color: color? color: null,
            weight: weight? weight: null,
            category,
            discount: parseFloat(discount),
            uid: uuid,
        },
        {merge:true}
    )
        
    batch.commit()
}

const newProductPhoto = async(storage, productPhoto, uuid) => {
    let storageRef = storage.ref()
    let initialType = productPhoto.type.substr(0, 5)
    if(productPhoto && (initialType === "image" )){
        let imageRenamed = new File([productPhoto], `product_${uuid}.jpeg`, {type: 'image/jpeg'})
        let routePath = `products/${imageRenamed.name}`
        let uploadTask  = storageRef.child(routePath).put(imageRenamed)
        // uploadTask.on('state_changed', (result)=>{
            // let progress = (result.bytesTransferred/result.totalBytes) * 100
            // console.log('Subido' + progress + '%')
        // })
        await uploadTask.then(async ()=>{
            // console.log("upload success")
            // window.location.reload()
        })
    }
}