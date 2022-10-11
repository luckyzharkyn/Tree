function Component() {
  const show = true;
  const pododdel = true;
  const otdel = true

  let result2 = <></>
    if(pododdel) {
      result2 = <div className="two">
      <div>
        <div className="rukovodstvo1">
            <p>rukovodstvo</p>
            <p>text2</p>
        </div>
        <div className="tree_column2">
          <div className="odOtdeli">
                <p>person</p>
                <p>text2</p>
          </div>
          <div className="odOtdeli">
                <p>person2</p>
                <p>text2</p>
          </div>
        </div>
      </div>
      <div>
        <div className="rukovodstvo1">
            <p>rukovodstvo2</p>
            <p>text2</p>
        </div>
        <div className="tree_column2">
            <div className="odOtdeli">
                  <p>person</p>
                  <p>text2</p>
            </div>
            <div className="odOtdeli">
                  <p>person2</p>
                  <p>text2</p>
            </div>
          </div>
        </div>
    </div>
    }

    let result = <></>;
    if(show) {
      result =  <div className="new_tree">
      <div className="odOtdeli">
            <p>odOtdel</p>
            <p>text2</p>
      </div>
      {result2}
</div>
    }

    let result3 = <></>
    if(otdel) {
      result3 = <div className="Otdel">
      <div className="rukovodstvo">
        <div className="odOtdeli">
              <p>rukovodstvo1</p>
              <p>text2</p>
        </div>
      </div>
      <div className="tree_column">
        {result}
      </div>
    </div>
    }

    


  return <>
    <div className="wrapper">
      <div className="mainTree">
          <div className="main">
                <p>Председатель</p>
                <p>text2</p>
          </div>
      </div>
      <div className="tree">
        {result3}
      </div>
    </div>
  </>  
}

export default Component;
