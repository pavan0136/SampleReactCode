import React from 'react';
import SyncLoader from "react-spinners/SyncLoader";

const override = {
    "display": "block",
    "margin": "0 auto",
    "borderColor": "red",
    "textAlign":"center"
}

export default function Spinner() {
    return <SyncLoader
            css={override}
            size={15}
            color={"#356ae6"}
            loading={true}
        />;
  }
  
