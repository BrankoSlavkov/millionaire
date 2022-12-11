import { AsideContainer, AsideList } from './aside.styles';

import { ListItem } from './ListItem';

const prices = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
] as const;

export const Aside = () => {
  return (
    <AsideContainer>
      <AsideList>
        {prices.map((price, index) => (
          <ListItem key={price} price={price} index={index} />
        ))}
      </AsideList>
    </AsideContainer>
  );
};
