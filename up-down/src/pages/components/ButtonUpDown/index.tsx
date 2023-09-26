import React from 'react';

interface ButtonUpDownProps {
    onUpClick: () => void;
    onDownClick: () => void;
}

export function ButtonUpDown({ onUpClick, onDownClick }: ButtonUpDownProps) {
    return (
        <>
            <button onClick={onUpClick}>/\ up</button>
            <button onClick={onDownClick}>\/ down</button>
        </>
    );
}
