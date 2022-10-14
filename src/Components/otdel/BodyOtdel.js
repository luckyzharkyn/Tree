import Doljnost from "../Doljnost"
import Rukovodstvo from "../Rukovodstvo"

function BodyOtdel({Rukovoditel, employees, showId, kategory}) {
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
              <Rukovodstvo  key={Rukovoditel.id}
                            id={Rukovoditel.id}
                            Rukovoditel={Rukovoditel}
                            showId={showId}
                            kategory={kategory}
              />
            <div className="tree_column2">
                {employee}
            </div>
        </div>
    </>
}

export default BodyOtdel