import { Children, cloneElement, isValidElement } from 'react';
import Svg from 'react-native-svg';

/* This is not to be used directly in the code, but only as a wrapper to create SVG icons */
function SVGIcon({ children, color = 'white', scale = 1, ...restProps }) {
  // use props to modify the underlying svg
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { fill: color, scale });
    }
    return child;
  });
  return (
    <Svg
      height={24 * scale}
      width={24 * scale}
      xmlns="http://www.w3.org/2000/svg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...restProps}
    >
      {childrenWithProps}
    </Svg>
  );
}

export default SVGIcon;
