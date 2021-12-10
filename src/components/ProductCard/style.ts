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

  .card-open-modal {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    
    img { 
      max-width: 10rem;
      width: 100%;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    span {
      padding: 0.5rem;
    }
 }
`