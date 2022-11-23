import { Props } from '@interfaces/General';
import React from 'react'
import { Sidebar } from './BasePanel/Sidebar';
import { NavBar } from './BasePanel/Navbar';


export const BasePanel = (props: Props) => {
    const { children } = props;
    return (
        <>
            <Sidebar />
            <main className="content">
                <NavBar />
                {children}
            </main>
        </>
    )
}
