import styled from "styled-components";

export const Container = styled.div`
 display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1rem;
    
    padding: 4rem;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    grid-gap: 1rem;
    }
`