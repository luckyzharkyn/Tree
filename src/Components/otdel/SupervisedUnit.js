
import Rukovodstvo from "../Rukovodstvo"
import BodyOtdel from "./BodyOtdel"

function SupervisedUnit({Rukovoditel, OtdelFullInfo, showId, kategory}) {
    const OtdelFullInfos = OtdelFullInfo.map(obj => {
        return <BodyOtdel 
                    key={obj.id}
                    id={obj.id}
                    Rukovoditel={obj.Rukovoditel}
                    employees={obj.employees}
                    showId={showId}
                    kategory={obj.Rukovoditel.kategory}
        />
    })

    let result;
    if(Rukovoditel.showThis) {
        result = <div className="new_tree">
                    <Rukovodstvo key={Rukovoditel.id}
                                id={Rukovoditel.id}
                                Rukovoditel={Rukovoditel} 
                                showId={showId} 
                                kategory={kategory}
                    />
                    <div className="relativeClass">
                        <div className={Rukovoditel.showChildrens ? "BodyOtdels show" : "dontShow"}>{OtdelFullInfos}</div>
                    </div>
                 </div>
    } else {
        result = <></>;
    }

    return <>
        {result}
    </>
}

export default SupervisedUnit