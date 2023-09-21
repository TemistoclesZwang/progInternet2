import React from 'react';
import './index.css'; // Certifique-se de criar um arquivo CSS para os estilos

interface MilhasProps {
    valorMilhas: number;
    atualizarValorMilhas: (novoValor: number) => void;
}

export const Milhas: React.FC<MilhasProps> = ({ valorMilhas, atualizarValorMilhas }) => {
    const diminuirMil = () => {
        atualizarValorMilhas(valorMilhas - 1000);
    };

    const diminuirDezMil = () => {
        atualizarValorMilhas(valorMilhas - 10000);
    };

    const aumentarMil = () => {
        atualizarValorMilhas(valorMilhas + 1000);
    };

    const aumentarDezMil = () => {
        atualizarValorMilhas(valorMilhas + 10000);
    };

    return (
        <div className="milhasComponente">
            <button className = "diminuir1k"onClick={diminuirMil}>-1k</button>
            <button className = "diminuir10k" onClick={diminuirDezMil}>-10k</button>
            <div className="milhasRetangulo">{valorMilhas}</div>
            <button className = "aumentar10k"onClick={aumentarDezMil}>+10k</button>
            <button className = "aumentar1k"onClick={aumentarMil}>+1k</button>
        </div>
    );
};
