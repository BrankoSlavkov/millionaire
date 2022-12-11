import { ListItemStyled, Price } from './aside.styles';

type ListItemProps = {
  price: number;
  index: number;
};

export const ListItem = ({ price, index }: ListItemProps) => {
  return (
    <ListItemStyled>
      <span>{index + 1}</span>
      <Price>$ {price.toLocaleString('de-DE')}</Price>
    </ListItemStyled>
  );
};
