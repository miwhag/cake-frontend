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
    transform: scale(1.6);
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
margin: -4em 9em 5em -16em;

.bubble{
  animation: ${pulse} infinite 5s linear;
  transform-origin: right;
  transform-box: fill-box;
}

.bubble:nth-of-type(2n){
  animation: ${pulse} infinite 7s linear;
  animation-delay: 2s;
  transform-origin: left;
  transform-box: fill-box;
}

.bubble:nth-of-type(3n){
  animation: ${pulse} infinite 10s linear;
  animation-delay: 3s;
  transform-origin: left;
  transform-box: fill-box;
}


 `
