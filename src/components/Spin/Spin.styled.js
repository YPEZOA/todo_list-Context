import styledComponents from 'styled-components'

export const Spinner = styledComponents.div`
  position: fixed;
  height: 70px;
  width: 70px;
  right: calc(50% - 50px);
  bottom: calc(50% - 50px);
  background-color: transparent;
  border: 10px solid lightblue;
  border-top-color: white;
  border-radius: 50px;
  animation: spin .8s linear infinite;
  box-sizing: border-box;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
`
