import { SpinnerContainer, SpinnerWheel } from './styles/sSpinner';

export const Spinner = ({ title }) => {
  return (
    <SpinnerContainer>
      <SpinnerWheel />
      {title && <p>{title}</p>}
    </SpinnerContainer>
  );
};

export default Spinner;
