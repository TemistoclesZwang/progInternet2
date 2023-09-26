import { useState } from 'react';
import './index.css'


interface MilhasProps {
    onCounterChange: (newValue: number) => void;
}

export function Milhas({ onCounterChange }: MilhasProps) {
    const [counter, setCounter] = useState(0);

    const decreaseByThousand = () => {
        if (counter >= 1000) {
            setCounter(counter - 1000);
            onCounterChange(counter - 1000);
        }
    };

    const decreaseByTenThousand = () => {
        if (counter >= 10000) {
            setCounter(counter - 10000);
            onCounterChange(counter - 10000);
        }
    };

    const increaseByThousand = () => {
        setCounter(counter + 1000);
        onCounterChange(counter + 1000);
    };

    const increaseByTenThousand = () => {
        setCounter(counter + 10000);
        onCounterChange(counter + 10000);
    };

    return (
        <div className="classMilhas">
            <button className = 'decreaseByThousand'onClick={decreaseByThousand}>-1000</button>
            <button className = 'decreaseByTenThousand'onClick={decreaseByTenThousand}>-10000</button>
            
            <div className="counterRectangle">{counter}</div>

            <button className = 'increaseByTenThousand'onClick={increaseByTenThousand}>+10000</button>
            <button className = 'increaseByThousand'onClick={increaseByThousand}>+1000</button>
        </div>
    );
}
