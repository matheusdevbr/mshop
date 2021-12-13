import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #444;  
  }

  * { 
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
    vertical-align:baseline;
  
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    @media (max-width: 500px) {
      font-size:  65.7%;
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.9);

    position: fixed;  
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;  

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 3rem 2rem;
  }


.react-modal-content {
    width: 100%;
    max-width: 60rem;
    background: #f8f2f5;

    padding: 3rem;
    position: relative;  
    border-radius: 0.5rem;
  }
  
`