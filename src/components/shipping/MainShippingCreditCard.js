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
import Spinner from '../spinner/Spinner';

const MainShippingCreditCard = () => {
  const db = useFirestore();
  const {
    idOfBuy,
    numberOfArticles,
    subTotalPrice,
    discount,
    dataOfCard,
    dataOfUser,
    dataOfDollar,
    checked,
    setChecked,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const sendPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setChecked(true);
      setLoading(false);
    }, 6000);
  };

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
        {loading ? (
          <Spinner title={'Concretando pago'} />
        ) : (
          <>
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
              {!dataOfCard && (
                <Link to="/shipping/add-credit-card">
                  <Button secondary small>
                    Agregar tarjetas
                  </Button>
                </Link>
              )}
            </ButtonContainer>
            <ButtonContainer center>
              {checked && <label className="label-checkbox">Pago exitoso!</label>}
            </ButtonContainer>
            <ButtonContainer>
              <Link to={checked ? '/shipping/buy' : null}>
                <Button
                  disabled={dataOfCard ? false : true}
                  onClick={
                    !checked
                      ? () => {
                          sendPayment();
                        }
                      : null
                  }
                >
                  {!checked ? 'Pagar para continuar' : 'Continuar'}
                </Button>
              </Link>
            </ButtonContainer>
          </>
        )}
      </Wrapper>
    </main>
  );
};

export default MainShippingCreditCard;
