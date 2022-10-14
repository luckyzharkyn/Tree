import { useState } from "react";
import Otdel from "./Components/Otdel"
import Rukovodstvo from "./Components/Rukovodstvo";

function id() {
  return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
}

function Component() {
  


  const [dates, setDates] = useState(
    {
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
            id: id(),
            "Rukovoditel":{
              "id": id(),
              "kategory": 1,
              "showThis":true,
              "showChildrens":true,
              "RukovoditelName":"Бахтияр Шапанулы",
              "RukovoditelDoljnost": "руководство",
              "otdelName": "OtdelName1"
            },
            "supervisedUnits": [
              {
                id: id(),
                "Rukovoditel":{
                  "id":id(),
                  "kategory": 2,
                  "showThis":true,
                  "showChildrens":false,
                  "RukovoditelName":"Бахтияр Шапанулы",
                  "RukovoditelDoljnost": "руководитель",
                  "otdelName": "OtdelName1"
                },
                OtdelFullInfo: [
                  {
                    id: id(),
                    "Rukovoditel":{
                      "id":id(),
                      "kategory": 4,
                      "showThis":false,
                      "showChildrens":false,
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
                  {
                    id: id(),
                    "Rukovoditel":{
                      "id":id(),
                      "kategory": 4,
                      "showThis":false,
                      "showChildrens":false,
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
          {
            id: id(),
            "Rukovoditel":{
              "id": id(),
              "kategory": 1,
              "showThis":true,
              "showChildrens":true,
              "RukovoditelName":"Бахтияр Шапанулы",
              "RukovoditelDoljnost": "руководство",
              "otdelName": "OtdelName1"
            },
            "supervisedUnits": [
              {
                id: id(),
                "Rukovoditel":{
                  "id":id(),
                  "kategory": 2,
                  "showThis":true,
                  "showChildrens":false,
                  "RukovoditelName":"Бахтияр Шапанулы",
                  "RukovoditelDoljnost": "руководитель",
                  "otdelName": "OtdelName1"
                },
                OtdelFullInfo: [
                  {
                    id: id(),
                    "Rukovoditel":{
                      "id":id(),
                      "kategory": 4,
                      "showThis":false,
                      "showChildrens":false,
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
  const changeSupervised = (supervisedUnit, kategory, id) => {
    let ruk = supervisedUnit.Rukovoditel;
    if(ruk.kategory === kategory) {
      ruk.showThis = true;
      if(ruk.id === id) {
        ruk.showChildrens = !ruk.showChildrens;
        return supervisedUnit
    } else {
      return supervisedUnit
    }
  }
  }
  
  const showId = (id, kategory) => {  // changeVisible
    
    let result = dates.Otdels.map(obj => {
      
      if(obj.Rukovoditel.kategory === kategory) {
          obj.Rukovoditel.showThis = true;
          if(obj.Rukovoditel.id === id) {
              obj.Rukovoditel.showChildrens = !obj.Rukovoditel.showChildrens;
              return obj
          } else {
            return obj
          }
      } else {
        let supervisedUnitsArray = obj.supervisedUnits.map(supervisedUnit => {
            return changeSupervised(supervisedUnit, kategory, id)
        })
        return {...obj, supervisedUnits: supervisedUnitsArray}
      } 
        
    })
    setDates({...dates, Otdels: result})
  }



  const Otdels = dates.Otdels.map(obj => {
    return <Otdel 
              key={obj.id} 
              Rukovoditel={obj.Rukovoditel}
              supervisedUnits={obj.supervisedUnits}
              showId={showId}
              kategory={obj.Rukovoditel.kategory}
              />
  })

  return <>
    <div className="wrapper">
      <div className="main">
            <p>{dates.GosOrganName}</p>
      </div>
      <Rukovodstvo 
                   id={dates.id} 
                   Rukovoditel={dates.Rukovoditel}/>
      <div className="tree">
          {Otdels}
      </div>
    </div>
  </>  
}

export default Component;
