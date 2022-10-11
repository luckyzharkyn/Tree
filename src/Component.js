import { useState } from "react";
import Otdel from "./Components/Otdel"
function Component() {
  const [status, setStatus] = useState([
    {id: 1, show: false},
    {id: 2, show: false},
    {id: 3, show: false},
  ])

  const [dates, setDates] = useState([
    {
      "GosOrganName": "Акимат города Астана",
      "FirstRuk": [
        {
          "FirstRukName":"Жаркын Маркабаев",
          "FirstRukDoljnost":"Председатель"
        }],
        Otdels: [
          {
            "id": 1,
            "Rukovoditel":[{
              "RukovoditelName":"Бахтияр Шапанулы",
              "RukovoditelDoljnost": "руководитель"
          }]
          }
        ]
    }
  ])

  function countOtdels() {
    let sum = 0;
    let count = dates.forEach(obj => {
      obj.Otdels.map(elem => {
          sum++
      })
    })
    return sum;
  } 
  

  const changeShow = (id) => {
      setStatus(status.map(obj => {
          if(obj.id === id) {
            return {...obj, show: !obj.show}
          } else {
            return {...obj, show: false}
          }
      }))
  }

  const Otdels = status.map(obj => {
    return <Otdel 
              key={obj.id} 
              id={obj.id} 
              show={obj.show} 
              changeShow={changeShow}/>
  })

  return <>
    <div className="wrapper">
      <div className="mainTree">
          <div className="main">
                <p>Госорган</p>
                <p>text2</p>
            </div>
          <div className="main">
                <p>Председатель</p>
                <p>text2</p>
          </div>
      </div>
      <div className="tree">
          {Otdels}
      </div>
    </div>
  </>  
}

export default Component;
