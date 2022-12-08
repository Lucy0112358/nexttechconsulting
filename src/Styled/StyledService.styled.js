import styled from "styled-components";

const StyledService = styled.div`
  width: 20.833vw;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 100px;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 29px;
    line-height: 40px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
  }
  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #0067f4;
    cursor: pointer;
    
  }
  .flex-divs {
    display: flex;
    flex-direction: row;
  }
  .last-div{
    padding-bottom: 33px;
  }
`;

export default StyledService;
