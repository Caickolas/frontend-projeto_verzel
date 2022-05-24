export default function Botao({
    type = 'button',
    texto,
    cor = 'primaria',
    disabled = false,
    onClick
}) {
    return (
        <button
            type={type}
            className={`btn ${cor}`}
            disabled={disabled}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}