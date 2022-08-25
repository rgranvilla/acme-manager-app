import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --bg_primary: #FFFFFF;
  --bg_secondary: #ABE5DD;
  --bg_button: #50B9EB;
  --bg_disabled: #666666

  --border_active: #0EA089;
  --border_inactivated: #BCBCBC;
  --border_inactive: #650D1B;
  --border_primary: #019DE6;

  --input_bg_active: #ABE5DD;
  --input_bg_inactivated: #E7E7E7;
  --input_bg_inactive: #E84A65;
  --input_txt_activated: #404040;
  --input_txt_active: #0EA089
  --input_txt_inactivated: #A1A1A1;
  --input_txt_inactive: #650D1B;
  
  --title_primary: #019DE6;
  
  --txt_primary: #404040;

  --white: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// font-size: 16px (Desktop)
html {
  @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720px) {
    font-size: 87.5%; // 14px
  }
}

body {
  background: var(--bg_primary);
  -webkit-font-smoothing: antialiased;
}

a { 
  text-decoration: none;
}

body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong {
  font-weight: 700;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
