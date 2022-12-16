import styled from "styled-components";
import background from "../images/backgroundimage.png";


const StyledBanner = styled.div`
display: flex;
flex-direction: row;
gap: 0;
width: 100%;
flex-template-rows: 50% 50%;
background-image: url('../Images/Rectangle.png');
background-color: #1976d2;
.blue-div{
   background: url(${background});
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover
}
@media screen and (max-width: 480px) {
flex-direction: column
  }
`
export default StyledBanner