import React from 'react';

interface BonusProps {
    valorMilhas: number;
    atualizarValorMilhas: (novoValor: number) => void;
}

export const BonusButtonRow: React.FC<BonusProps> = ({ valorMilhas, atualizarValorMilhas }) => {
    const calcularBonusMilhas = (porcentagem: number) => {
        const novoValorMilhas = valorMilhas * (1 + (porcentagem / 100));
        atualizarValorMilhas(novoValorMilhas);
    };

    return (
        <div className="buttonsRow">
            <button onClick={() => calcularBonusMilhas(80)}>80%</button>
            <button onClick={() => calcularBonusMilhas(100)}>100%</button>
            <button onClick={() => calcularBonusMilhas(150)}>150%</button>
            <button onClick={() => calcularBonusMilhas(200)}>200%</button>
            <button onClick={() => calcularBonusMilhas(250)}>250%</button>
            <button onClick={() => calcularBonusMilhas(300)}>300%</button>
        </div>
    );
};
