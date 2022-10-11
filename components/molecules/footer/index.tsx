import { links } from 'common';
import { Logo, NavLink } from 'components';
import Image from 'next/future/image';

const Footer = () => {
  return (
    <footer className=''>
      <Logo />
      {/* NAVIGATION */}
      <ul role={'list'}>
        {links?.navigation?.map((link) => (
          <li key={link.text}>
            <NavLink activeClassName='' href={link.url}>
              <a>{link.text}</a>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul role={'list'}>
        {links?.social?.map((link) => (
          <li key={link.alt}>
            <a>
              {link?.url}
              <Image src={link?.icon} alt={link?.alt} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export { Footer };
