import { createGlobalStyle } from 'styled-components';

import AnironWoff from './Aniron.woff';
import AnironWoff2 from './Aniron.woff2';
import RingbearerWoff from './Ringbearer.woff';
import RingbearerWoff2 from './Ringbearer.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Aniron';
        src: local('Aniron'), local('Aniron'),
        url(${AnironWoff2}) format('woff2'),
        url(${AnironWoff}) format('woff');
        wont-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Ringbearer';
        src: local('Ringbearer'), local('Ringbearer'),
        url(${RingbearerWoff2}) format('woff2'),
        url(${RingbearerWoff}) format('woff');
        wont-weight: 300;
        font-style: normal;
    }
`;