import { keyframes } from 'styled-components';

export default (from, to) => keyframes`
    0% {
        bottom: ${from};
    }

    50% {
      bottom: ${to};
    }

    100% {
        bottom: ${from};
    }
`;
