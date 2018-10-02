import styled from 'styled-components';

// import colors from '../../constants/colors'
import breakpoints from '../constants/breakpoints';
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  position: relative;

  @media screen and (min-width: ${breakpoints.desktop.pixels}) {
    width: calc(100vw - 72px);
    margin: 0 0 0 72px;
  }
`;
