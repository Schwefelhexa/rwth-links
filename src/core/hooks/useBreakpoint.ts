import { useWindowWidth } from '@react-hook/window-size';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

const useBreakpoint = (): ((point: keyof typeof breakpoints) => boolean) => {
  const width = useWindowWidth();

  return (point) => width >= breakpoints[point];
};
export default useBreakpoint;
