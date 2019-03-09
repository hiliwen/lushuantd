import * as React from 'react';
import { SiderProps } from './Sider';
export interface GeneratorProps {
    suffixCls: string;
    tagName: 'header' | 'footer' | 'main' | 'section';
}
export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
    prefixCls?: string;
    hasSider?: boolean;
    tagName: 'header' | 'footer' | 'main' | 'section';
}
declare const Layout: React.ComponentClass<BasicProps> & {
    Header: React.ComponentClass<BasicProps>;
    Footer: React.ComponentClass<BasicProps>;
    Content: React.ComponentClass<BasicProps>;
    Sider: React.ComponentClass<SiderProps>;
};
export default Layout;
