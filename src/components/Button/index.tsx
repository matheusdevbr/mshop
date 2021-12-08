
import { IButtonProps } from '../../interfaces/interface';



export function Button({ nome, selected, ...rest }: IButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
      {nome}
    </button>
  );
}