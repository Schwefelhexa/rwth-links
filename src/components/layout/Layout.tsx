import React from 'react';
import { PageProps } from 'gatsby';

import ClientSide from '../util/ClientSide';
import SEO from './SEO';
const LinkBar = React.lazy(() => import('./LinkBar'));

interface Props {
  title: string;
  context: Pick<PageProps, 'location'>;
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ context, title, children }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden z-0">
      <SEO title={title} />
      <ClientSide>
        <React.Suspense fallback={<div />}>
          <LinkBar context={context} />
        </React.Suspense>
      </ClientSide>
      <div className="w-full h-full px-6 py-6 lg:px-10 lg:py-10 z-10">{children}</div>
    </div>
  );
};
export default Layout;
