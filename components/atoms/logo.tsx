import { icons } from 'common';
import { trim } from 'helpers';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  const classes = trim(`${Boolean(className) ? className : ''}`);
  return (
    <Link href={'/'} passHref>
      <a aria-label='go home' className={classes}>
        <span className='sr-only'>home logo</span>
        <icons.logo aria-hidden='true' className='icon' />
      </a>
    </Link>
  );
};

export { Logo };

//  className={`${Boolean(className) ? className : ''}`}
