import React, { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
const ClientSide: React.FC<Props> = ({ children }) => {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return <>{client && children}</>;
};
export default ClientSide;
