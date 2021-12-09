import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f8f2f5;  
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr 3fr;

    padding: 4rem;
  }

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