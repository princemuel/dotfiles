import { links } from 'common';
import { Logo, NavLink } from 'components';
import Image from 'next/future/image';

const Footer = () => {
  return (
    <footer className=''>
      <Logo />

      {/* NAVIGATION */}
      <nav>
        <ul role={'list'} className='' aria-label='Secondary Navigation'>
          {links?.navigation?.map((link) => (
            <li key={link.text}>
              <NavLink activeClassName='' href={link.url}>
                <a className=''>{link.text}</a>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* SOCIAL */}
      <ul role={'list'} className='' aria-label='Social Links'>
        {links?.social?.map((link) => (
          <li key={link.alt}>
            <a href={link?.url}>
              <Image src={link?.icon} alt={link?.alt} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export { Footer };
