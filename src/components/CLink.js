import React from 'react';
import {Link} from "react-router-dom";

const CLink = ({value,action}) => {
    return(
        <div className="link" onClick={action}>
            {value}
    </div>

    )
}


export default CLink;