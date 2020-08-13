import React, { useRef } from 'react';
import StyledCard from './Card.styled';
import { animated, useSpring } from 'react-spring';

const AnimatedCard = animated(StyledCard);

const Card = ({ url }) => {
  const ref = useRef();

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const calc = (x, y) => [
    (-y + ref.current.offsetTop + ref.current.clientHeight / 2) / 20,
    -(-x + ref.current.offsetLeft + ref.current.clientWidth / 2) / 20,
    1.1,
  ];

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <AnimatedCard
      ref={ref}
      onMouseMove={({ clientX: x, clientY: y }) => {
        set({ xys: calc(x, y) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      url={url}
    >
      {console.log()}
    </AnimatedCard>
  );
};

export default Card;
