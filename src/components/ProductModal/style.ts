import styled  from "styled-components";

export const Container = styled.div`
.react-modal-overlay {
    background: rgba(0, 0, 0, 0.9);

    position: fixed;  //ficar sobre
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;  

    display: flex;
    align-items: center;
    justify-content: center;
  }


.react-modal-content {
    width: 100%;
    max-width: 60rem;
    background: var(--background);

    padding: 3rem;
    position: relative;  
    border-radius: 0.5rem;
  }



 
`