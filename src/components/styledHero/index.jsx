import styled from 'styled-components'
import defultImg from "../../images/room-1.jpeg"

const StyledHero = styled.header`  
  background: url(${props =>props.img ? props.img :defultImg}) center / cover no-repeat;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;



export default StyledHero;