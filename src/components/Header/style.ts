import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 2rem;
  background: #222;
  padding: 15px 3rem;
  border-radius: 7px;

  a {
    text-decoration: none;
    color: #fff;
    transition: opacity 0.2s;


    &:hover {
      opacity: 0.7;
    }
  }

`

export const Home = styled(Link)`

`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`