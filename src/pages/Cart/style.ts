import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 1rem;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  footer {
    margin-top: 30px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #ddd;
    border-radius: 5px;
    button {
      background: #777;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: #222
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    max-width: 9rem;
    height: 100px;
    margin-left: 1rem;
    margin-bottom: -2rem;
  }
 
  strong {
    color: #333;
    display: block;
    margin-top: -3rem;
  }
  
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
    svg {
      color: #777;
      transition: color 0.2s;
    }
    &:hover {
      svg {
        color: #333;
      }
    }
    &:disabled {
      svg {
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;