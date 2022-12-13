import { getCurrentQuestionIndex, useStore } from '../../store';
import { ListItemStyled, Price } from './aside.styles';

type ListItemProps = {
  price: number;
  index: number;
};

export const ListItem = ({ price, index }: ListItemProps) => {
  const currentQuestionIndex = useStore(getCurrentQuestionIndex);
  return (
    <ListItemStyled isActive={index === currentQuestionIndex}>
      <span>{index + 1}</span>
      <Price>$ {price.toLocaleString('de-DE')}</Price>
    </ListItemStyled>
  );
};
