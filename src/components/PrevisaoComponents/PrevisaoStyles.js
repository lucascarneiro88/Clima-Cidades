import styled from "styled-components";

export const PrevisaoContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h4 {
    text-align: center;
    margin-bottom: 1px;
    color: #333;
    /* font-size: 22px; */
  }

  ul {
    list-style: none; //tira o marcadeo da lista não ordenada
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
    padding: 10px;
    margin-bottom: 5px;

    img {
      margin-right: 10px;
    }
  }
`;
