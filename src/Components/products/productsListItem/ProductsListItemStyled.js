import styled from "styled-components";

export const ProductsListItemContainer = styled.li`
  padding: 20px;
  width: 25%;

  .card {
    border: 1px solid green;
    border-radius: 14px;
    padding: 20px;
  }

  .colorsList {
    display: flex;
    list-style: none;
  }
`;

export const ColorsListItemContainer = styled.li`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${props => props.color};
  margin: 5px;
`;
