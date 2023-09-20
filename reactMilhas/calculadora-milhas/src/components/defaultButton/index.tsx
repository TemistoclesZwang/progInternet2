interface DefaultButtonProps{
    label?:string
    onClick?:() => void
}

export function DefaultButton(
    {label = "Botão padrão", onClick}: DefaultButtonProps
){
    return (
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    )
}