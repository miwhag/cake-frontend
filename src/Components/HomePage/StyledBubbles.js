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



.bubble{
animation: ${pulse} infinite 4s linear;
  transform-originL center;
  transform-box: fill-box;
}

.bubble:nth-of-type(2n){
    animation: ${pulse} infinite 10s linear;
  transform-originL center;
  transform-box: fill-box;
}
 `
