import React, { useState } from 'react';

interface BonusButtonPlusMinProps {
    valorBonus: number;
    valorMilhas: number;
    atualizarValorMilhas: (novoValor: number) => void;
}

export const BonusButtonPlusMin: React.FC<BonusButtonPlusMinProps> = ({ valorBonus, valorMilhas, atualizarValorMilhas }) => {
    const [porcentagem, setPorcentagem] = useState(valorBonus);

    const diminuirPorcentagem = () => {
        if (valorMilhas > 0) {
            setPorcentagem(porcentagem - 1);
            atualizarValorMilhas(valorMilhas - 1000);
        }
    };

    const aumentarPorcentagem = () => {
        if (valorMilhas > 0) {
            setPorcentagem(porcentagem + 1);
            atualizarValorMilhas(valorMilhas + 1000);
        }
    };

    return (
        <div className="BonusButtonPlusMin">
            <button onClick={diminuirPorcentagem}>-</button>
            <span>{porcentagem}%</span>
            <button onClick={aumentarPorcentagem}>+</button>
        </div>
    );
};
