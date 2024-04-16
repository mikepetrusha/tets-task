import * as Styled from './addressbook-card.styles';
import { ICardProps } from './addressbook-card.types';

export const AddressbookCard = ({ data: { email, firstname, lastname } }: ICardProps) => {
  return (
    <Styled.Card data-testid="test-contact-card">
      <Styled.CardName>
        {firstname} {lastname}
      </Styled.CardName>
      <Styled.CardEmail>{email}</Styled.CardEmail>
    </Styled.Card>
  );
};
