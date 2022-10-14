
function Rukovodstvo({id, Rukovoditel, showId, kategory}) {
    return <>
        <div className="rukovodstvoOtdela" onClick={() => showId(id, kategory)}>
            <p>{Rukovoditel.RukovoditelName}</p>
            <p>{Rukovoditel.RukovoditelDoljnost}</p>
            <p>{Rukovoditel.otdelName}</p>
        </div>
    </>
}

export default Rukovodstvo