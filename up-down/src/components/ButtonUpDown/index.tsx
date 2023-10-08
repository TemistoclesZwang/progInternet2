import './index.css'


interface ButtonUpDownProps {
    onUpClick: () => void;
    onDownClick: () => void;
}

export function ButtonUpDown({ onUpClick, onDownClick }: ButtonUpDownProps) {
    return (
        <div className='containerUpDownButton'>
            <button className='upButton' onClick={onUpClick}>/\ up</button>
            <button className='downButton' onClick={onDownClick}>\/ down</button>
        </div>
    );
}
