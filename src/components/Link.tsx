import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface Props {
  to: string;
  children: React.ReactNode;
}
const Link: React.FC<Props> = ({ to, children }) => (
  <GatsbyLink to={to} className="text-2xl lg:text-3xl lg:leading-relaxed font-semibold text-primary underline">
    {children}
  </GatsbyLink>
);
export default Link;
