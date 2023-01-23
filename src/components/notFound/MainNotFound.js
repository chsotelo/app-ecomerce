import { ContainerNotFound, Figure } from './styles/sMainNotFound';

const NotFound = () => {
  return (
    <ContainerNotFound>
      <label>Pagina no encontrada - 404</label>
      <Figure>
        <img src="https://media.tenor.com/vYTwUEafhogAAAAC/404.gif" alt="Not found" />
      </Figure>
    </ContainerNotFound>
  );
};

export default NotFound;
