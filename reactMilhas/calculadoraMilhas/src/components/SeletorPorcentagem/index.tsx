import { useState } from 'react';
import './index.css'

interface SeletorPorcentagemProps {
    onPorcentagemChange: (novaPorcentagem: number) => void;
}

export function SeletorPorcentagem({ onPorcentagemChange }: SeletorPorcentagemProps) {
    const porcentagens = [80, 100, 150, 200, 250, 300];
    const [indicePorcentagem, setIndicePorcentagem] = useState(0);

    function handleDiminuir() {
        if (indicePorcentagem > 0) {
            setIndicePorcentagem(indicePorcentagem - 1);
            onPorcentagemChange(porcentagens[indicePorcentagem - 1]);
        }
    }

    function handleAumentar() {
        if (indicePorcentagem < porcentagens.length - 1) {
            setIndicePorcentagem(indicePorcentagem + 1);
            onPorcentagemChange(porcentagens[indicePorcentagem + 1]);
        }
    }

    return (
        <div className='seletorPorcentagem'>
            <button className = 'diminuir'onClick={handleDiminuir}>-</button>
            <span>{porcentagens[indicePorcentagem]}%</span>
            <button className = 'aumentar'onClick={handleAumentar}>+</button>
        </div>
    );
}

