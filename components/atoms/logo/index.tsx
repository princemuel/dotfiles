import { LogoSVG } from 'common';
import Image from 'next/future/image';

const Logo = () => {
  return (
    <div>
      <Image src={LogoSVG} alt='Logo' />
    </div>
  );
};

export { Logo };
