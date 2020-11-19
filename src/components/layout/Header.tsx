import React from 'react';

interface Props {
  children: React.ReactNode;
}
const Header: React.FC<Props> = ({ children }) => (
  <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-none mb-5">{children}</h1>
);
export default Header;
