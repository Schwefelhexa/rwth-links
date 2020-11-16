import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => <div className="w-full h-full px-6 py-6">{children}</div>;
export default Layout;
