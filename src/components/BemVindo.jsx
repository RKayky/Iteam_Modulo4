const BemVindo = ({nomeUsuario, totalHabitos}) => {
    const nomeFormatado = nomeUsuario.toUpperCase()

    const mensagem = totalHabitos > 0
    ? `você tem ${totalHabitos} hábitos cadastrados.`
    : `Nenhum hábito cadastrado ainda. Que tal começar`

    return(
        <div>
            <h2>Olá, {nomeFormatado}! </h2>
            <p>{mensagem}</p>
            <p>Dois mais dois é {2 + 2}</p>
            <p></p>
        </div>
    )
}

export default BemVindo