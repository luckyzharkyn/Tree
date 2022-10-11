import Otdel from "./Components/Otdel"
function Component() {
  return <>
    <div className="wrapper">
      <div className="mainTree">
          <div className="main">
                <p>Председатель</p>
                <p>text2</p>
          </div>
      </div>
      <div className="tree">
        <Otdel />
      </div>
    </div>
  </>  
}

export default Component;
