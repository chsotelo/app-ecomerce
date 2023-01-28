export const recoverDataOfUser = async (db, user) => {
  const userRef = db.collection('users').doc(user.uid);
  const doc = await userRef.get();
  if (!doc.exists) {
    console.log('Usuario nuevo!');
    // window.location.reload();
  } else {
    return doc.data();
  }
};
