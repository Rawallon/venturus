import React from 'react';

export default function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        left: props.left,
        top: props.top,
      }}
      containerid="Pitch">
      <div title={props.label}>
        <svg
          width="4.5rem"
          height="4.5rem"
          viewBox="0 0 91 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 78C19.0469 78 2 60.9542 2 40.0007C2 19.0472 19.0469 2 40 2C60.9531 2 78 19.0472 78 40.0007C78 60.9542 60.9531 78 40 78Z"
            stroke="#A473C3"
            strokeWidth="2"
            strokeMiterlimit="3.8637"
            strokeDasharray="6 6"
          />
          <path
            d="M40 72C22.3553 72 8 57.6456 8 40.0006C8 22.3556 22.3553 8 40 8C57.6447 8 72 22.3556 72 40.0006C72 57.6456 57.6447 72 40 72Z"
            fill="#CC9ABF"
            stroke="#7B2C66"
            strokeWidth="2"
            strokeMiterlimit="3.8637"
          />
          <path
            d="M41.8145 38.5596H47.7617V41.123H41.8145V47.8613H39.0898V41.123H33.1426V38.5596H39.0898V32.334H41.8145V38.5596Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
