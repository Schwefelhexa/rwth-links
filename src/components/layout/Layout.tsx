import React from 'react';
import { PageProps } from 'gatsby';

import SEO from './SEO';
import LinkBar from './LinkBar';

interface Props {
  title: string;
  context: Pick<PageProps, 'location'>;
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ context, title, children }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden z-0">
      <SEO title={title} />
      <LinkBar context={context} />
      <div className="w-full h-full px-6 py-6 lg:px-10 lg:py-10 z-10">{children}</div>
    </div>
  );
};
export default Layout;
