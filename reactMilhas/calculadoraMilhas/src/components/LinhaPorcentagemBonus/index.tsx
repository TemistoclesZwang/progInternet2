import React, { useState, useEffect } from 'react';
import './index.css'


interface LinhaPorcentagemBonusProps {
    valorSelecionado: number;
}

export function LinhaPorcentagemBonus({ valorSelecionado }: LinhaPorcentagemBonusProps) {
    const porcentagens = [80, 100, 150, 200, 250, 300];
    const [selecionado, setSelecionado] = useState(valorSelecionado);

    useEffect(() => {
        setSelecionado(valorSelecionado);
    }, [valorSelecionado]);
    return (
        <div>
            {porcentagens.map((valor) => (
                <button
                    key={valor}
                    style={{ fontWeight: valor === selecionado ? 'bold' : 'normal' }}
                >
                    {valor}%
                </button>
            ))}

        </div>
    );
}
