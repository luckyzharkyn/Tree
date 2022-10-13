import SupervisedUnit from "./otdel/SupervisedUnit"
import Rukovodstvo from "./Rukovodstvo"

function Otdel({Rukovoditel, supervisedUnits, showId}) {
    const supervisedUnitsShow = supervisedUnits.map(obj => {
        return <SupervisedUnit 
                    key={obj.id}
                    Rukovoditel={obj.Rukovoditel}
                    OtdelFullInfo={obj.OtdelFullInfo}
                    showId={showId}
                />
    })

    return <>
        <div className="Otdel">
            <Rukovodstvo id={Rukovoditel.id}
                            Rukovoditel={Rukovoditel} 
                            showId={showId}
            />
            <div className="tree_row">
                {supervisedUnitsShow}
            </div>
        </div>
    </>
}

export default Otdel