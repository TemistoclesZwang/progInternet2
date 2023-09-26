import './App.css'
import { useState } from 'react';
import { Section } from './components/Section';
import { Milhas } from './components/Milhas';
import { LinhaPorcentagemBonus } from './components/LinhaPorcentagemBonus';
import { MsgPrecoMilheiro } from './components/MsgPrecoMilheiro';
import { Economia } from './components/Economia';
import { SeletorPorcentagem } from './components/SeletorPorcentagem';
import { CalcValores } from './components/CalcValores';

function App() {
  const [milhasValue, setMilhasValue] = useState(0);
  const [counterBonus, setCounterBonusValue] = useState(80);
  const valorPadraoMilhas = 70



  const handleCounterChange = (newValue: number) => {
    setMilhasValue(newValue);
  };

  const handleCounterBonusChange = (newValue: number) => {
    setCounterBonusValue(newValue);
  };


  return (
    <>
      {/* Total de milhas */}
      <p>Milha</p>
      <Section borderColor="none" size="big">
        <Milhas onCounterChange={handleCounterChange} />
      </Section>

      {/* Preço do milheiro */}
        <p>Preço milheiro</p>
      <Section borderColor='gray' size='normal'>
      <div>
        <p>R${valorPadraoMilhas},00</p>
      </div>
      </Section>

      {/* Bônus */}
      <p>Bônus</p>
      <Section borderColor="gray" size="normal">
        <SeletorPorcentagem onPorcentagemChange={handleCounterBonusChange}></SeletorPorcentagem>
      </Section>
      
      <Section borderColor="none" size="normal">
        <LinhaPorcentagemBonus valorSelecionado={counterBonus} />
      </Section>

      {/* RGB */}
      <Section borderColor="gray" size="big"></Section>

      {/* Preço do milheiro */}
      <Section borderColor="green" size="normal">
        <CalcValores bonusValue={counterBonus} totalDeMilhasCompradas={milhasValue} valorPadraoDasMilhas={valorPadraoMilhas}></CalcValores>
        {/* <MsgPrecoMilheiro valorPadraoDasMilhas={valorPadraoMilhas} bonusValue={counterBonus} totalDeMilhasCompradas={milhasValue}  /> Use o componente Milheiro aqui */}
      </Section>

      {/* Economia */}
      <Section borderColor='gray' size='big'>
        <Economia bonusValue={counterBonus} totalDeMilhasCompradas={milhasValue} valorPadraoMilheiro={valorPadraoMilhas}></Economia>
      </Section>
    </>
  );
}

export default App;