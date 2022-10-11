import Doljnost from "../Doljnost"
import Rukovodstvo from "../Rukovodstvo"

function BodyOtdel() {
    return <>
        <div className="BodyOtdel">
          <div>
              <Rukovodstvo />
            <div className="tree_column2">
              <Doljnost />
              <Doljnost />
            </div>
          </div>
        </div>
    </>
}

export default BodyOtdel