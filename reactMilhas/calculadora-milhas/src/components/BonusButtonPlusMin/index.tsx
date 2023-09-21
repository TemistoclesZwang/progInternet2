import React, { useState } from 'react';

interface BonusButtonPlusMinProps {
    valorBonus: number;
}

export const BonusButtonPlusMin: React.FC<BonusButtonPlusMinProps> = ({ valorBonus }) => {
    const [porcentagem, setPorcentagem] = useState(valorBonus);

    const diminuirPorcentagem = () => {
        setPorcentagem(porcentagem - 1);
    };

    const aumentarPorcentagem = () => {
        setPorcentagem(porcentagem + 1);
    };

    return (
        <div className="BonusButtonPlusMin">
            <button onClick={diminuirPorcentagem}>-</button>
            <span>{porcentagem}%</span>
            <button onClick={aumentarPorcentagem}>+</button>
        </div>
    );
};

