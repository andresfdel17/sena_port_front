import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react'

export const Sidebar = (props: any) => {
    const aside = useRef(null);

    return (
       <aside ref={aside} style={{display: "none"}} className="sidebar position-fixed top-0 left-0 overflow-auto h-100 float-left">
            <FontAwesomeIcon icon={faBars} className="close-aside d-md-none d-lg-none" />
       </aside>
    )
}
