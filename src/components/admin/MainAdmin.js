import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styles/generalComponents';
import { Wrapper } from '../../styles/generalStyles';
import { ButtonsPanelAdmin, ContainerAdminPanel } from './styles/sMainAdmin';

export const MainAdmin = () => {
  return (
    <main>
      <Wrapper secondaryWrapperNotLineBottom margin="40px auto 0 auto" width="500px">
        <ContainerAdminPanel>
          <h2>Panel de administrador</h2>
          <ButtonsPanelAdmin>
            <Link to={'/addProducts'}>
              <Button secundary>Agregar productos</Button>
            </Link>
            <Link to={'/editProducts'}>
              <Button secundary>Administrar productos</Button>
            </Link>
          </ButtonsPanelAdmin>
        </ContainerAdminPanel>
      </Wrapper>
    </main>
  );
};
