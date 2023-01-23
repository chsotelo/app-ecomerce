import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFirestore } from 'reactfire';
import { AppContext } from '../../../App';
import { InputContainer, Option, Select } from '../../../styles/generalComponents';
import { Wrapper } from '../../../styles/generalStyles';
import Spinner from '../../spinner/Spinner';
import { CardToReview } from './CardToReview';

export const MainEditProducts = () => {
  const [localLoading, setLocalLoading] = useState(false);
  const db = useFirestore();
  const { allProdutsLocal, setAllProductsLocal } = useContext(AppContext);

  const [productsFiltered, setProductsFiltered] = useState('Todos');
  const [products, setProducts] = useState(null);

  const recoverDataProducts = async ({ db, setLocalLoading }) => {
    setLocalLoading(true);
    let productsRecover = [];
    const products = await db.collection('products').get();
    products.forEach((product) => {
      productsRecover.push(product.data());
    });
    return productsRecover;
  };

  useEffect(() => {
    recoverDataProducts({ db, setLocalLoading })
      .then((products) => {
        setAllProductsLocal(products);
        setLocalLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLocalLoading(false);
      });
  }, []);

  useEffect(() => {
    if (productsFiltered && allProdutsLocal) {
      if (productsFiltered === 'Todos') {
        setProducts(allProdutsLocal);
      } else {
        const productsFilteredLocal = allProdutsLocal.filter(
          (product) => product.category === productsFiltered,
        );
        setProducts(productsFilteredLocal);
      }
    }
  }, [allProdutsLocal, productsFiltered]);

  localLoading && <Spinner title={'cargando productos ...'} />;

  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="800px">
        <InputContainer>
          <label htmlFor="category" id="category">
            Filtrar por Categoria:
          </label>
          <Select
            name="category"
            onChange={(e) => {
              setProductsFiltered(e.target.value);
            }}
          >
            <Option value="Todos">Todos los productos</Option>
            <Option value="Auriculares">Auriculares</Option>
            <Option value="Altavoz">Altavoz</Option>
            <Option value="Reproductor">Reproductor de sonido</Option>
            <Option value="Laptop">Laptops</Option>
            <Option value="Controlador">Controladores</Option>
            <Option value="Smarthphone">Smarthphones</Option>
            <Option value="Profesional">Profesional</Option>
          </Select>
        </InputContainer>

        {products?.map((product, index) => {
          return <CardToReview key={index} productSelected={product} {...product} />;
        })}
      </Wrapper>
    </main>
  );
};
