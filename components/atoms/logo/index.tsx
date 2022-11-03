import { icons } from 'common';
import { trim } from 'helpers';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  const classes = trim(`icon ${Boolean(className) ? className : ''}`);
  return (
    <Link href={'/'} passHref>
      <a aria-label='go home'>
        <span className='sr-only'>home logo</span>
        <icons.logo className={classes} aria-hidden='true' />
      </a>
    </Link>
  );
};

export { Logo };
