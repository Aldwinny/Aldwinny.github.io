import React from 'react'

function Navlink({goto, target = "", className, children, isList = false}) {
  return isList ? 
    <li className={className}>
        <a href={goto} target={target}>
            {children}
        </a>
    </li> 
    :
    <a href={goto} target={target} className={className}>
        {children}
    </a>
}

export default Navlink