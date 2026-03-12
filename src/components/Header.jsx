function Header({ titulo, descricao, subtitulo}) {
    return(
        <div>
            <h1> {titulo} </h1>
            <h2> {subtitulo} </h2>
            <p>{descricao}</p>
        </div>
    )
}
export default Header