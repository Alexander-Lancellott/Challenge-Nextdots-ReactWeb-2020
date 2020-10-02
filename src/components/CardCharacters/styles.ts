// LIBS
import styled from "@emotion/styled";

export const Card = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  padding-left: 2%;
  padding-right: 2%;
  transition: transform 0.5s ease;
  
  &:not(#disable):hover {
    transform: scale(1.1);
  }
`;