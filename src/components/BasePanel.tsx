import { Props } from '@interfaces/General';
import React from 'react'
import "@assets/css/panel.css";
import { Sidebar } from './BasePanel/Sidebar';

export const BasePanel = (props: Props) => {
    const { children } = props;
    
    return (
        <>
            <Sidebar />
            <main className="content">
                
                <div className="wrapper-content">
                    {children}
                </div>
                
            </main>
        </>
    )
}
