import { Path } from 'react-native-svg';

const symbols = {
  toggle: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          scale={scale}
          fill={color}
          d="M3.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM11.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75ZM18 14.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM3.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
        />
      );
    },
  },
  share: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          fill={color}
          scale={scale}
          d="M.782 12.816c0-2.378.536-4.277 1.593-5.65C3.65 5.508 5.665 4.614 8.37 4.503V.672l7.85 6.68-7.85 6.679v-3.81c-1.642.045-2.882.282-3.87.737-1.066.492-1.84 1.226-2.674 2.178L.782 14.328v-1.512Z"
        />
      );
    },
  },
  arrowUp: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          fill={color}
          scale={scale}
          d="M6 0C4.8 0 1.833 5 .5 7.5l3.5 1v13h3l1-13s2-.5 3.5-.5c0-2-4-8-5.5-8Z"
        />
      );
    },
  },
  shareOutline: {
    size: 8,
    content(color, scale) {
      return (
        <Path
          d="M.5 7.5V5a2 2 0 0 1 2-2h4M5 1l2 2-2 2"
          scale={scale}
          stroke={color}
        />
      );
    },
  },
};

export default symbols;
