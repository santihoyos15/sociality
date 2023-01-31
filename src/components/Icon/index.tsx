import { Container } from './styles';
import { Props } from './types';

export const Icon: React.FC<Props> = ({ name, style }: Props) => {
  return (
    <Container className="material-symbols-outlined" style={style}>
      {name}
    </Container>
  );
};
