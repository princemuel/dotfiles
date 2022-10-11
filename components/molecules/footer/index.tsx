import { links } from 'common';
import { Logo, NavLink } from 'components';
import Image from 'next/future/image';

const Footer = () => {
  return (
    <footer className=''>
      <Logo />

      {/* NAVIGATION */}
      <nav>
        <ul role={'list'} aria-label='Secondary Navigation'>
          {links?.navigation?.map((link) => (
            <li key={link.text}>
              <NavLink activeClassName='' href={link.url}>
                <a>{link.text}</a>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* SOCIAL */}
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
