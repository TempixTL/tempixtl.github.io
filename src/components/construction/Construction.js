import React from 'react';
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Misc
import { faHardHat } from '@fortawesome/free-solid-svg-icons';

function Construction() {
  return (
    <h1 className="text-center">
      <FontAwesomeIcon icon={faHardHat} />
      <br />
      Under construction.
      <br />
      Come back soon!
    </h1>
  );
}

export default Construction;
