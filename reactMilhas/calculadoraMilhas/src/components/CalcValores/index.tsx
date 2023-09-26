import React, { useEffect, useState } from 'react';

interface CalcValoresProps {
    bonusValue: number;
    totalDeMilhasCompradas: number;
    valorPadraoDasMilhas: number;
}

export function CalcValores({ bonusValue, totalDeMilhasCompradas, valorPadraoDasMilhas }: CalcValoresProps) {
    const [descontoValorMilheiro, setDescontoValorMilheiro] = useState(0);

    useEffect(() => {
        if (bonusValue !== 0) {
            const calcMilhaBonus = (totalDeMilhasCompradas * bonusValue) / 100
            const precoMilhasSemBonus = (calcMilhaBonus / 1000) * valorPadraoDasMilhas 
            const valorComDesconto = (precoMilhasSemBonus - (60 / 100) * precoMilhasSemBonus);

            setDescontoValorMilheiro(valorComDesconto)
        }
        }, [bonusValue, totalDeMilhasCompradas, valorPadraoDasMilhas])
    
    return (
        <div>
            <p>Cada milheiro sairá por: {descontoValorMilheiro}</p>
        </div>
            )
}


