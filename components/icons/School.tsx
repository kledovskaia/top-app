import { FC, SVGAttributes } from 'react';

type Props = SVGAttributes<SVGElement>;

const School: FC<Props> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.735 9.667S14.813 4 11.373 4H5.417v17h14.166v-9.208c0-2.422-3.716-2.653-5.848-2.125zm3.015 7.791h-8.5v-.708h8.5v.708zm0-2.125h-8.5v-.708h8.5v.708zm0-2.125h-8.5V12.5h8.5v.708zm-2.431-9.155c1.56.832 4.206 3.459 5.264 4.874-.91-.637-2.864-1.174-4.314-.835.157-1.04-.131-3.212-.95-4.039z"></path>
  </svg>
);

export default School;
