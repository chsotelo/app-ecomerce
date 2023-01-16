export const recoverProducts = async(firestore, category = null, price = null, mark = null, limit = 6) => {
    if(category){
        return await firestore
        .collection("products")
        .where("category", "==", category)
        .orderBy("stock", "desc")
        .limit(limit)
        .get()
        .then((result)=> {
            if(result.empty){
            console.log("No hay productos disponibles.")
            return null
            }else{
            return result.docs.map(doc => {
                return doc.data()
                })
            }
        })
    }else if(mark) {
        return await firestore
        .collection("products")
        .where("mark", "==", mark)
        .orderBy("stock", "desc")
        .limit(limit)
        .get()
        .then((result)=> {
            if(result.empty){
            console.log("No hay productos disponibles.")
            return null
            }else{
            return result.docs.map(doc => {
                return doc.data()
                })
            }
        })
    }else if(price){
        return await firestore
        .collection("products")
        .where("price", "<=", price)
        .orderBy("price", "desc")
        .limit(limit)
        .get()
        .then((result)=> {
            if(result.empty){
            console.log("No hay productos disponibles.")
            return null
            }else{
            return result.docs.map(doc => {
                return doc.data()
                })
            }
        })
    }
}