import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
    path?: string;
}

export interface PortectedProps {
    element?: ReactNode;
    path?: string;
}