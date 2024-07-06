import styled from "styled-components";

const StyledHomeHero =styled.header` 
 background: url(${props=>props.img}) center / cover no-repeat;
  min-height: calc(100vh - 66px);
  display: flex;
  justify-content: center;
  align-items: center;
`
export default StyledHomeHero