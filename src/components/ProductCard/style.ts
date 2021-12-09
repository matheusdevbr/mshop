import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 1.2rem 2rem;
  border-radius: 0.5rem;
  background: #f8f2f5;

  img { 
    max-width: 10rem;
    width: 100%;

    cursor: pointer;
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    padding: 0.5rem;
  }

  button {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem 2rem;
    font-size: 1rem;

    border-radius: 0.5rem;
    background: #bbb;

    color: #111;

    div {
        display: flex;
        align-items: center;
        padding: .5rem;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
  
    &:hover {
      background: #999;

      transition: 0.2s;
    }
  }
 
`