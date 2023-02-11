import axios from 'axios';
const myHeaders = {
  apikey: '1FRkZlEMC5j7hTKGsHM751DsjfrpClKl',
};

const requestOptions = {
  headers: myHeaders,
};

export const recoverDataOfDollar = async ({ db, dataOfUser }) => {
  if (!dataOfUser) return null;
  const dollarDataRef = db.collection('dollardata').doc(dataOfUser.uid);
  const doc = await dollarDataRef.get();
  const dateAfter = doc.data()?.info?.timestamp;

  const dateNow = new Date().getTime() - 1000 * 60 * 60 * 24 * 2;

  if (!doc.data() || !dateAfter || dateNow - dateAfter < 1000 * 60 * 60 * 24) {
    const dataOnline = await axios
      .get('https://api.apilayer.com/fixer/convert?to=PEN&from=USD&amount=1', requestOptions)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
    const dataFinal = dataOnline;
    // guardamos en la base de datos
    await dollarDataRef
      .set(
        {
          ...dataFinal,
        },
        { merge: true },
      )
      .then(() => {
        console.log('Data dollar successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });

    return dataFinal.result;
  } else {
    return doc.data().result;
  }
};
