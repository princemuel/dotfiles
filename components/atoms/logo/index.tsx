import { links } from 'common';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  const classes = `icon ${Boolean(className) ? className : ''} `.trim();
  return (
    <Link href={'/'} passHref>
      <a aria-label='go home'>
        <span className='sr-only'>home logo</span>
        <links.logo.icon className={classes} aria-hidden='true' />
      </a>
    </Link>
  );
};

export { Logo };
