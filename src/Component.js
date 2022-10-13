import { useState } from "react";
import Otdel from "./Components/Otdel"
import Rukovodstvo from "./Components/Rukovodstvo";

function id() {
  return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
}

function Component() {
  


  const [dates, setDates] = useState(
    {
      id: id(),
      "GosOrganName": "Акимат города Астана",
      "Rukovoditel": 
        {
          "id": id(),
          "RukovoditelName":"Жаркын Маркабаев",
          "RukovoditelDoljnost":"Председатель",
          "otdelName": ""
        },
        Otdels: [
          {
            "Rukovoditel":{
              "id": id(),
              "kategory": 1,
              "showThis":true,
              "showChildres":true,
              "RukovoditelName":"Бахтияр Шапанулы",
              "RukovoditelDoljnost": "руководство",
              "otdelName": "OtdelName1"
            },
            "supervisedUnits": [
              {
                "Rukovoditel":{
                  "id":id(),
                  "kategory": 2,
                  "showThis":true,
                  "showChildres":true,
                  "RukovoditelName":"Бахтияр Шапанулы",
                  "RukovoditelDoljnost": "руководитель",
                  "otdelName": "OtdelName1"
                },
                OtdelFullInfo: [
                  {
                    "Rukovoditel":{
                      "id":id(),
                      "kategory": 3,
                      "showThis":true,
                      "showChildres":true,
                      "RukovoditelName":"Бахтияр Шапанулы",
                      "RukovoditelDoljnost": "руководитель",
                      "otdelName": "OtdelName1"
                    },
                    "employees": [
                      {
                        "id":id(),
                        "name":"Ожикова А.Е",
                        "doljnost": "Главный консультант"
                      },
                      {
                        "id":id(),
                        "name":"Шакаева Г.К.",
                        "doljnost": "Главный эксперт"
                      },
                    ]
                  },
                ]
              },
            ]
          },
          
        ]
    }
  )

  
  const showId = (id) => {  // changeVisible
    let OtdelsClone = Array.from(dates.Otdels);
    let result = Otdels.map(obj => {
        if(obj.Rukovoditel.id === id) {
            obj.Rukovoditel.showChildres = true;
            return obj
        } 
    })
    setDates({...dates, })
  }



  const Otdels = dates.Otdels.map(obj => {
    return <Otdel 
              key={obj.id} 
              Rukovoditel={obj.Rukovoditel}
              supervisedUnits={obj.supervisedUnits}
              showId={showId}
              />
  })

  return <>
    <div className="wrapper">
      <div className="main">
            <p>{dates.GosOrganName}</p>
      </div>
      <Rukovodstvo id={dates.id} 
                   Rukovoditel={dates.Rukovoditel}/>
      <div className="tree">
          {Otdels}
      </div>
    </div>
  </>  
}

export default Component;
