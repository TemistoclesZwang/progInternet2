import { useEffect, useState } from 'react';
import './index.css';

interface EconomiaProps {
    bonusValue: number;
    totalDeMilhasCompradas: number;
    valorPadraoMilheiro: number;
}

export function Economia({ bonusValue, totalDeMilhasCompradas, valorPadraoMilheiro }: EconomiaProps) {

    const [totalDeMilhasComBonus, setTotalDeMilhasComBonus] = useState(0)
    
    const precoMilhasSemBonus = (totalDeMilhasComBonus / 1000) * valorPadraoMilheiro 
    const valorComDesconto = (precoMilhasSemBonus - (60 / 100) * precoMilhasSemBonus);
    const economizando = precoMilhasSemBonus - valorComDesconto


    useEffect(() => {
        if (bonusValue !== 0) {
            const calcMilhaBonus = (totalDeMilhasCompradas * bonusValue) / 100
            console.log(calcMilhaBonus);
            
            setTotalDeMilhasComBonus(calcMilhaBonus+totalDeMilhasCompradas)
        } else {
        }
    }, [bonusValue, totalDeMilhasCompradas])

    return (
        <div className='txtEconomia'>
            <p>"Sua compra de {totalDeMilhasComBonus} milhas custaria R${precoMilhasSemBonus} 
            porém, com o seu bônus de {bonusValue}% pagará apenas R${valorComDesconto.toFixed(2)} Economizando {economizando}"</p>
        </div>
    );
}
