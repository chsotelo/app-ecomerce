import { useContext } from 'react';
import { useFirestore } from 'reactfire';
import Swal from 'sweetalert2';
import { AppContext } from '../../App';
import { Button } from '../../styles/generalComponents';
import {
  ButtonsContainer,
  ContainerCard,
  DetailsContainer,
  ImageCard,
  TextCardContainer,
} from './styles/sCardToReview';

const onDeleteProduct = async ({ db, uid, setAllProductsLocal, allProdutsLocal }) => {
  console.log('uid', uid);
  try {
    Swal.fire({
      title: '¿Estas seguro de eliminar este producto?',
      showCancelButton: true,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await db
          .collection('products')
          .doc(uid)
          .delete()
          .then(() => {
            console.log('eliminado');
            const newProducts = allProdutsLocal.filter((product) => product.uid !== uid);
            setAllProductsLocal(newProducts);
          });

        Swal.fire('Producto eliminado correctamente', '', 'success');
      } else if (result.isDenied) {
        console.log('no se elimino');
      }
    });
    //*TODO: buscar la imagen en storage mediante el url y eliminarla
  } catch (error) {
    console.log(error);
  }
};

export const CardToReview = ({
  title,
  description,
  price,
  photoUrl,
  color,
  mark,
  uid,
  stock,
  discount,
  weight,
}) => {
  const db = useFirestore();
  const { allProdutsLocal, setAllProductsLocal } = useContext(AppContext);
  return (
    <ContainerCard>
      <ImageCard>
        <img src={photoUrl} alt={title} loading={'lazy'} />
      </ImageCard>
      <TextCardContainer>
        <h3>{title}</h3>
        <p>{description}</p>
        <DetailsContainer>
          <p>UID: {uid}</p>
          <p>
            <span>Marca:</span> {mark}
          </p>
          <p>
            <span>Precio:</span> s/{price}
          </p>
          <p>
            <span>Descuento:</span> s/{discount}
          </p>
          <p>
            <span>Color:</span> {color}
          </p>
          <p>
            <span>Stock:</span> {stock} unidades
          </p>
          <p>
            <span>Peso:</span> {weight} kg
          </p>
        </DetailsContainer>
        <ButtonsContainer>
          <Button secondary> Editar</Button>
          <Button
            secondary
            onClick={() => {
              onDeleteProduct({ uid, db, setAllProductsLocal, allProdutsLocal });
            }}
          >
            Eliminar
          </Button>
        </ButtonsContainer>
      </TextCardContainer>
    </ContainerCard>
  );
};
