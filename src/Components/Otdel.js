import FirstOtdels from "./otdel/FirstOtdels"
import Rukovodstvo from "./Rukovodstvo"

function Otdel({id, show, changeShow}) {
    return <>
        <div className="Otdel">
            <div className="rukovodstvo">
                <Rukovodstvo />
            </div>
            <div className="tree_column">
                <FirstOtdels id={id} show={show} changeShow={changeShow}/>
            </div>
        </div>
    </>
}

export default Otdel