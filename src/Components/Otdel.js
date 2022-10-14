import SupervisedUnit from "./otdel/SupervisedUnit"
import Rukovodstvo from "./Rukovodstvo"

function Otdel({Rukovoditel, supervisedUnits, showId, kategory}) {
    const supervisedUnitsShow = supervisedUnits.map(obj => {
        return <SupervisedUnit 
                    key={obj.id}
                    Rukovoditel={obj.Rukovoditel}
                    OtdelFullInfo={obj.OtdelFullInfo}
                    showId={showId}
                    kategory={obj.Rukovoditel.kategory}
                />
    })

    let result;
    if(Rukovoditel.showThis) {
        result = <div className="Otdel"> 
                    <Rukovodstvo    key={Rukovoditel.id}
                                    id={Rukovoditel.id}
                                    Rukovoditel={Rukovoditel} 
                                    showId={showId}
                                    kategory={kategory}
                    />
                    <div className={Rukovoditel.showChildrens ? "BodyOtree_columntdels show" : "dontShow"}>{supervisedUnitsShow}</div>
                </div>;
    } else {
        result = <></>;
    }

    return <>
        {result}
    </>
}

export default Otdel