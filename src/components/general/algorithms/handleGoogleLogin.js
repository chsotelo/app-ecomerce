export const handleGoogleLogin = ({ dataOfUser, setLoading, firebase }) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (result) => {
        const user = await result.user;
        const data = {
          displayName: user.displayName,
          email: user.email,
          createdAt: user.metadata.createdAt,
          listOfLogins: user.metadata.lastLoginAt,
          photoURL: user.photoURL.replace('s96-c', 's400-c'),
        };
        await sendDataUserFromGoogle(data, user.uid, () => firebase.firestore());
        //recargar la pagina
        if (!dataOfUser) {
          setLoading({ status: true, title: 'Preparando tus datos!' });
          window.location.reload();
        }
        //navegar al directorio raiz
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        // ...
        console.error(errorCode, errorMessage, email, credential);
      });
  } catch (err) {
    console.error(err);
  }
};

const sendDataUserFromGoogle = async (data, uid, db) => {
  try {
    const { displayName, email, photoURL } = data;
    const userRef = await db().collection('users').doc(uid);
    const doc = await userRef.get();
    if (!doc.exists) {
      await userRef.set(
        {
          username: displayName,
          email,
          photoURL,
          uid,
        },
        { merge: true },
      );
    }
  } catch (err) {
    console.error(err);
  }
};
