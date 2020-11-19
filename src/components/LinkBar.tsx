import React from 'react';
import { Link, PageProps } from 'gatsby';
import { House } from 'phosphor-react';

import useBreakpoint from 'core/hooks/useBreakpoint';
import config from '../../tailwind.config';

interface Props {
  context: Pick<PageProps, 'location'>;
}
const LinkBar: React.FC<Props> = ({ context }) => {
  const breakpoint = useBreakpoint();
  return (
    <div className="fixed left-0 bottom-0 z-20 pointer-events-none">
      {context.location.pathname !== '/' && context.location.pathname !== '' && (
        <Link to="/" className="block ml-6 mb-6 lg:ml-10 lg:mb-10 pointer-events-auto">
          <House size={breakpoint('lg') ? 64 : 42} weight="fill" color={config.theme.colors.primary} />
        </Link>
      )}
    </div>
  );
};
export default LinkBar;
