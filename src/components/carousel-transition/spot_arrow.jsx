import React from 'react';

const SpotArrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={`spot-slide-arrow ${direction}`}
        onClick={clickFunction}>
        {glyph}
    </div>
);

export default SpotArrow;