export const sendDataOfBuy = async (firestore, listOfWish, addressOfUser, dataOfCard, idOfBuy) => {
    const batch =  firestore.batch()
    const purchasesRef =  firestore.collection("purchases").doc(idOfBuy)

    batch.set(
        purchasesRef,
        {
            listOfWish: firestore.app.firebase_.firestore.FieldValue.arrayUnion(...listOfWish),
            addressOfUser,
            dataOfCard,
            idOfBuy,
            email: addressOfUser.email,
        },
        {merge: true}
    )

    await batch.commit()
}