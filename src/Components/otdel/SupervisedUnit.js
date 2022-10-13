
import Rukovodstvo from "../Rukovodstvo"
import BodyOtdel from "./BodyOtdel"

function SupervisedUnit({Rukovoditel, OtdelFullInfo, showId}) {
    const OtdelFullInfos = OtdelFullInfo.map(obj => {
        return <BodyOtdel 
                    key={obj.id}
                    id={obj.id}
                    Rukovoditel={obj.Rukovoditel}
                    employees={obj.employees}
                    showId={showId}
        />
    })
    return <>
        <div className="new_tree">
            <Rukovodstvo id={Rukovoditel.id}
                         Rukovoditel={Rukovoditel} 
                         showId={showId} 
            />
            <div className="BodyOtdels">
                {OtdelFullInfos}
            </div>
        </div>
    </>
}

export default SupervisedUnit