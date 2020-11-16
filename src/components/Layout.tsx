import React from 'react';
import { Link, PageProps } from 'gatsby';
import { House } from 'phosphor-react';

import config from '../../tailwind.config';

interface Props {
  context: Pick<PageProps, 'location'>;
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ context, children }) => (
  <div className="w-full min-h-screen relative">
    <div className="absolute left-0 bottom-0">
      {context.location.pathname !== '/' && context.location.pathname !== '' && (
        <Link to="/" className="block ml-8 mb-8">
          <House size={42} weight="fill" color={config.theme.colors.primary} />
        </Link>
      )}
    </div>
    <div className="w-full h-full px-6 py-6">{children}</div>
  </div>
);
export default Layout;
