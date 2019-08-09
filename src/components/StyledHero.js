import styled from 'styled-components';

const StyledHero = styled.header`
  min-height: 6ovh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
