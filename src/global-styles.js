import {injectGlobal} from 'styled-components';
import colors from './constants/colors';
import fonts from './constants/fonts';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  *::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  } 

  ::selection {
    /* background: ${colors.purpleLightissimo} !important;
    color: ${colors.gray} */
  }
  

  * { 
    box-sizing: border-box;
  }
  
  body {
    font-family: ${fonts.primary}, Helvetica, sans-serif;
  }
`;
