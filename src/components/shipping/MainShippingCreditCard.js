import React, { useContext, useEffect, useState } from 'react';
// import { PayPalButtons } from '@paypal/react-paypal-js';
import {
  PayPalScriptProvider,
  BraintreePayPalButtons,
  PayPalButtons,
} from '@paypal/react-paypal-js';
import { AppContext } from '../../App';
import { Link } from 'react-router-dom';
import SummaryPucharse from './../general/SummaryPucharse';
import CardCreditCard from './CardCreditCard';
import { Wrapper } from './../../styles/generalStyles';
import {
  TitleContainer,
  TextBodyLarge,
  Button,
  ButtonContainer,
  DetailsProduct as DetailsCustomer,
  TextBodySmall,
  Checkbox,
} from './../../styles/generalComponents';
import { PromotionSecurityContainer } from './styles/sShipping';
import { ReactComponent as SecuritySVG } from './../../icons/others/security.svg';
import { useFirestore } from 'reactfire';
import Swal from 'sweetalert2';

const MainShippingCreditCard = () => {
  const db = useFirestore();
  const { idOfBuy, numberOfArticles, subTotalPrice, discount, dataOfCard, dataOfUser } =
    useContext(AppContext);
  const [checked, setChecked] = useState(dataOfUser?.checkedCard ?? false);

  const onHandleCkecked = async ({ db, dataOfUser, checked }) => {
    try {
      const userRef = db.collection('users').doc(dataOfUser?.uid);

      await userRef.update(
        {
          checkedCard: checked,
        },
        { merge: true },
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onHandleCkecked({ db, dataOfUser, checked });
  }, [checked]);

  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="500px">
        <TitleContainer>
          <TextBodyLarge>Selecciona un método de pago</TextBodyLarge>
        </TitleContainer>
        <form>
          <fieldset>{dataOfCard == null ? <></> : <CardCreditCard {...dataOfCard} />}</fieldset>
        </form>
        <SummaryPucharse
          numberOfArticles={numberOfArticles}
          subTotalPrice={subTotalPrice}
          idOfBuy={idOfBuy}
          discount={discount}
        />
        <ButtonContainer center>
          {/* <Link to="/shipping/add-credit-card">
            <Button secondary small>Agregar tarjetas</Button>
          </Link> */}

          {!checked && (
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: subTotalPrice - discount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order
                  .capture()
                  .then((details) => {
                    const name = details.payer.name.given_name;
                    data.authCode = details.purchase_units[0].payments.authorizations[0].id;
                    console.log(data);
                    setChecked(true);
                    alert(`Transaction completed by ${name}`);
                  })
                  .catch((error) => {
                    setChecked(true);
                    console.log(error);
                  });
              }}
              onShippingChange={(data, actions) => {
                return actions.resolve().then(() => {
                  setChecked(true);
                  console.log(data);
                });
              }}
              onError={(err) => {
                setChecked(true);
                console.log(err);
              }}
            />
          )}
          <>{checked && <label className="label-checkbox">Pago exitoso!</label>}</>
        </ButtonContainer>
        <ButtonContainer>
          <Link to={checked ? '/shipping/buy' : null}>
            <Button
              onClick={
                !checked
                  ? () => {
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Debes pagar para continuar',
                      });
                    }
                  : null
              }
            >
              {!checked ? 'Pagar para continuar' : 'Continuar'}
            </Button>
          </Link>
        </ButtonContainer>
      </Wrapper>
    </main>
  );
};

export default MainShippingCreditCard;
