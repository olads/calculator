import React from 'react';
import {Link} from "react-router-dom";

const CLink = ({to, value}) => {
    return(
        <div >
        <Link to={to} className="link">
            {value}
        </Link>
    </div>

    )
}


export default CLink;