import styled  from "styled-components";

export const Container = styled.button`
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
`