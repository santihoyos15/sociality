import { Container } from './styles';
import { Props } from './types'

export const Feed: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
