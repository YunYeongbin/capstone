import { useEffect, useState} from "react";
import axios from "axios";

import RouterWeb from "./RouterWeb.js";
import { silverDataAtom } from "../../recoil/silverDataAtom.js";
import { relateDataAtom } from "../../recoil/relateDataAtom.js";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  const setSilverData = useSetRecoilState(silverDataAtom); 
    useEffect(() => {
      axios.get("http://ec2-3-34-136-247.ap-northeast-2.compute.amazonaws.com:8080/")
      .then(res => {
        setSilverData(res.data.silverList)
      })
      .catch(error => console.log(error))
    }, []);

    return (
      <div className="App">
        <RouterWeb/>
      </div>
    );
}

export default App;