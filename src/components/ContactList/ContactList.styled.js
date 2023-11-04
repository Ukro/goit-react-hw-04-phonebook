import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 15px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background-color: #ffffff;
  }
`;

export const ContactName = styled.span`
  flex-grow: 1;
  text-transform: capitalize;
  font-size: 18px;
`;

export const ContactNumber = styled.span`
  margin-right: 25px;
  font-size: 18px;
`;
