
function Rukovodstvo({id, Rukovoditel, showId}) {
    return <>
        <div className="rukovodstvoOtdela" onClick={() => showId(id)}>
            <p>{Rukovoditel.RukovoditelName}</p>
            <p>{Rukovoditel.RukovoditelDoljnost}</p>
            <p>{Rukovoditel.otdelName}</p>
        </div>
    </>
}

export default Rukovodstvo