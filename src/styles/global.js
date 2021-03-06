import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Francois+One|Kanit');


*, :after, :before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fafafa;
  color: #3c414d;
  font-family: Francois One, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
}
`;

export default GlobalStyle;
