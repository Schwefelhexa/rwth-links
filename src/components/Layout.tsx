import React from 'react';
import { Link, PageProps } from 'gatsby';
import { House } from 'phosphor-react';

import config from '../../tailwind.config';
import useBreakpoint from 'core/hooks/useBreakpoint';

interface Props {
  context: Pick<PageProps, 'location'>;
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ context, children }) => {
  const breakpoint = useBreakpoint();
  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      <div className="absolute left-0 bottom-0">
        {context.location.pathname !== '/' && context.location.pathname !== '' && (
          <Link to="/" className="block mx-6 my-6 lg:mx-10 lg:my-10">
            <House size={breakpoint('lg') ? 64 : 42} weight="fill" color={config.theme.colors.primary} />
          </Link>
        )}
      </div>
      <div className="w-full h-full px-6 py-6 lg:px-10 lg:py-10">{children}</div>
    </div>
  );
};
export default Layout;
