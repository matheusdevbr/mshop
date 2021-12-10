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
    cursor: pointer;
    
    img { 
      max-width: 10rem;
      width: 100%;
    }

    span {
      font-size: 1.2rem;
      font-weight: 600;
    }

    p {
      padding: 0.5rem;
    }
 }
`