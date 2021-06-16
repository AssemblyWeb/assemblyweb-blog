import { createGlobalStyle } from "styled-components"
import font from '../assets/fonts/frenchfries.woff'

const Typography = createGlobalStyle`
    @font-face{
        font-family: Titilum;
        src: url(${font});
    }
    html{
        font-family: Titilum, sans-serif;
        color: black;
    }
`;

export default Typography;