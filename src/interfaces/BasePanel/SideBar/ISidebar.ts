import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface ICollapsableNavItem {
    eventKey: any;
    title: string;
    icon: IconProp;
    children: ReactNode;
}

export interface INavItem  {
    title: string;
    link?: any;
    external: boolean;
    target: any;
    icon: IconProp;
    image: any;
    badgeText: string;
    badgeBg?: string;
    badgeColor?: any;
}
export interface IHref {
    href: any
}

export interface ILink {
    as: any;
    to: any;
}