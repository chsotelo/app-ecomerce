export const updateListOfWish = async ({ listOfWish, dataOfUser, db }) => {
  const userRef = db.collection('users').doc(dataOfUser.uid);
  await userRef
    .update(
      {
        card: listOfWish,
      },
      { merge: true },
    )
    .then(() => {
      // console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};
