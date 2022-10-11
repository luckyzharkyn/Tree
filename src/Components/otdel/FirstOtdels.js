import { useState } from "react"
import BodyOtdel from "./BodyOtdel"

function FirstOtdels({id, show, changeShow}) {
   

    let Otdelx;
    if(show) {
        Otdelx = <BodyOtdel/>
    } else {
        Otdelx = <></>
    }

    return <>
        <div className="new_tree" onClick={() => changeShow(id)}>
            <div className="odOtdeli">
                <p>odOtdel</p>
                <p>text2</p>
            </div>
            {Otdelx}
        </div>
    </>
}

export default FirstOtdels