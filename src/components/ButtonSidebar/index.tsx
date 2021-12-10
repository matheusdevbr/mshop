
import { IButtonProps } from '../../interfaces/interface';
import { Container } from './style';



export function ButtonSideBar({ nome, selected, ...rest }: IButtonProps) {
  return (
    <Container>
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      {nome}
    </button>
    </Container>
  );
}