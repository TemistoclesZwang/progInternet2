import  { useState } from 'react';

interface MsgPrecoMilheiroProps{
    msgValorOriginal: number;
    msgQtdMilhaComBonus: number;
    msgPagariaPorMilha: number;
    msgValorFinal: number;
}


export function MsgPrecoMilheiro ({msgValorOriginal,msgQtdMilhaComBonus,msgPagariaPorMilha,msgValorFinal}:MsgPrecoMilheiroProps){

    return (
        <div>
            <p>Valor Original: {msgValorOriginal}</p>
            <p>Quantidade de Milhas com Bônus: {msgQtdMilhaComBonus}</p>
            <p>Preço que Pagaria por Milha: {msgPagariaPorMilha}</p>
            <p>Valor Final: {msgValorFinal}</p>
        </div>
    )
}