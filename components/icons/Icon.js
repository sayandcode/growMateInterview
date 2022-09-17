import { Path } from 'react-native-svg';
import SVGIcon from './SVGIcon';

/* Use this as the interface that contains all the possible icons */
function Icon({ symbol, color, ...restProps }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SVGIcon color={color} {...restProps}>
      {symbols[symbol]}
    </SVGIcon>
  );
}

const symbols = {
  toggle: (
    <Path d="M3.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM11.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75ZM18 14.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM3.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z" />
  ),
  share: (
    <Path d="M.782 12.816c0-2.378.536-4.277 1.593-5.65C3.65 5.508 5.665 4.614 8.37 4.503V.672l7.85 6.68-7.85 6.679v-3.81c-1.642.045-2.882.282-3.87.737-1.066.492-1.84 1.226-2.674 2.178L.782 14.328v-1.512Z" />
  ),
  arrowUp: (
    <Path d="M6 0C4.8 0 1.833 5 .5 7.5l3.5 1v13h3l1-13s2-.5 3.5-.5c0-2-4-8-5.5-8Z" />
  ),
};

export default Icon;
