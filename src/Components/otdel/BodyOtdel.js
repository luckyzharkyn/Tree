import Doljnost from "../Doljnost"
import Rukovodstvo from "../Rukovodstvo"

function BodyOtdel({Rukovoditel, employees, showId}) {
    const employee = employees.map(obj => {
      return <Doljnost 
                key={obj.id}
                name={obj.name}
                doljnost={obj.doljnost}
                showId={showId}
      />
    })
    return <>
        <div className="BodyOtdel">
          <div>
              <Rukovodstvo  id={Rukovoditel.id}
                            Rukovoditel={Rukovoditel}
                            showId={showId}
              />
            <div className="tree_column2">
                {employee}
            </div>
          </div>
        </div>
    </>
}

export default BodyOtdel