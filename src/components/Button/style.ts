
import styled  from "styled-components";

export const Container = styled.div`
 
  button {
   

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 18rem;
  width: 100%;

  margin-top: .5rem;

  background: #fff;
  padding: 1rem 2rem;
  border-radius: 0.5rem;

  font-size: 1.2rem;
  
  
  &:hover {
    background: #777;
  }

  transition: 0.2s;

  &.selected {
    background: #777;
    color: #333

  }
}
`