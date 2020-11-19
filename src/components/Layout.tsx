import React from 'react';
import { PageProps } from 'gatsby';

import ClientSide from './util/ClientSide';
const LinkBar = React.lazy(() => import('./LinkBar'));

interface Props {
  context: Pick<PageProps, 'location'>;
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ context, children }) => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden z-0">
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
