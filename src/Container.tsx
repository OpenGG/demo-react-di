import { createContext, useContext } from 'react';

const ContainerContext = createContext({});
export const DIContainer = ({
  r,
  children,
}: {
  r: Record<string, unknown>;
  children?: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <ContainerContext.Provider value={r}>{children}</ContainerContext.Provider>
  );
};

export function useDI<IVal>(key: string): IVal {
  const map = useContext(ContainerContext) as any;

  return map[key] as IVal;
}
