import { Props } from './types';
import { Action, Container, Count } from './styles';
import { Icon } from '../Icon';

export const Counter: React.FC<Props> = ({ count }: Props) => {
  return (
    <Container>
      <Action>
        <Icon name="add" style={{ color: 'var(--primary-color)' }} />
      </Action>
      <Count>{count}</Count>
      <Action>
        <Icon name="remove" style={{ color: 'var(--primary-color)' }} />
      </Action>
    </Container>
  );
};
