import { ReactComponent as Cake } from '../../Images/cake.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import '../../Styles/App.css'



const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 0.2;
  transform-origin: bottom;
}

50% {
    transform: scale(1.4);
    opacity: 0.9;
    transform-origin: bottom;
}

100% {
    transform: scale(0);
    opacity: 0.2;
    transform-origin: bottom;
}

`;
export const HomepageImage = styled(Cake)`
margin: -4em 0em 0em -5em;

.bubble{
animation: ${pulse} infinite 4s linear;
  transform-origin: right;
  transform-box: fill-box;
}

.bubble:nth-of-type(2n){
    animation: ${pulse} infinite 9s linear;
  transform-origin: left;
  transform-box: fill-box;
}
 `
