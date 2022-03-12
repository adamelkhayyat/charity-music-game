import { useEffect, useState } from "react";
import { ListeningComp } from "../components/listening"

export const StageA2Element = ({config}) => {
  console.log(config);
  
  return (<div>
    {config.map((questionConfig) => <ListeningComp config={questionConfig}/>)}
    </div>)
}