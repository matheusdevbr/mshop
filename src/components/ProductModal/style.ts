import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .product-info-modal{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    margin-bottom: 1rem;
    text-align: center;
    
    img {
      width: 100%;
      max-width: 30rem;
    }
    .product-info-modal-text{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;

      h4 {
        font-size: 2rem;
        text-align: center;
      }

      p {
        margin-top: 1rem;
        padding: 10px;
        border-radius: 5px;
        background-color: #efefef
      }
      strong {
        display: block;

        font-size: 1.5rem;
        margin-top: -2rem;
      }
    }
  }
`