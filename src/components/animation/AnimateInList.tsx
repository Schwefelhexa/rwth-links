import React from 'react';
import { useTrail, animated, config } from 'react-spring';

interface Props {
  children: React.ReactNode[];
}
const AnimateInList: React.FC<Props> = ({ children }) => {
  const trail = useTrail(children.length, {
    from: {
      transform: 'translateX(-100vw)'
    },
    transform: 'translateX(0vw)',
    config: config.stiff
  });

  return (
    <>
      {trail.map((props, i) => (
        <animated.div key={i} style={props}>
          {children[i]}
        </animated.div>
      ))}
    </>
  );
};
export default AnimateInList;
