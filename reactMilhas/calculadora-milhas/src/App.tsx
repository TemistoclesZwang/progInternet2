import React, { useState } from 'react';
import './App.css'
import { DefaultRectangle } from './components/DefaultRectangle'
import { Milhas } from './components/Milhas'
import { BonusButtonRow } from './components/BonusButtonRow';
import { BonusButtonPlusMin } from './components/BonusButtonPlusMin';

function App() {
  const [valorMilhas, setValorMilhas] = useState(0);

  const atualizarValorMilhas = (novoValor: number) => {
    setValorMilhas(novoValor);
  };

  return (
    <main>
      <p>Milhas</p>
      <div className='milhas'>
        <DefaultRectangle exibirBordas={false}>
          <Milhas valorMilhas={valorMilhas} atualizarValorMilhas={atualizarValorMilhas} />
        </DefaultRectangle>
      </div>
      <p>Preço milheiro</p>
      <div className='precoMilheiro'>
        <DefaultRectangle exibirBordas={true} heightVariant='little'>
          <p>R$ 70,00</p>
        </DefaultRectangle>
      </div>
      <p>Bônus</p>
      <div className='bonus'>
        <DefaultRectangle exibirBordas={true} heightVariant='little'>
          <BonusButtonPlusMin valorBonus={0} valorMilhas={valorMilhas} atualizarValorMilhas={atualizarValorMilhas} />
        </DefaultRectangle>
        <DefaultRectangle exibirBordas={false} heightVariant='little'>
          <BonusButtonRow valorMilhas={valorMilhas} atualizarValorMilhas={atualizarValorMilhas} />
        </DefaultRectangle>
      </div>
      <div className='rgb'>
        <DefaultRectangle exibirBordas={true}>
        </DefaultRectangle>
      </div>
      <div className='precoUnidadeMilheiro'>
        <DefaultRectangle exibirBordas={true} heightVariant='little'>
        </DefaultRectangle>
      </div>
      <div className='resumoFinal'>
        <DefaultRectangle exibirBordas={true}>
        </DefaultRectangle>
      </div>
    </main>
  );
}

export default App;
