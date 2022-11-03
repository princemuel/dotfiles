import { links } from 'common';
import { Logo, NavLink } from 'components/atoms';

const Footer = () => {
  // text-neutral-100 bg-primary-300;
  return (
    <footer className='py-20 sm:py-11'>
      <div className='app-container flex flex-col sm:flex-row items-center gap-10'>
        <Logo className='' />
        {/* NAVIGATION */}
        <nav>
          <ul
            role={'list'}
            className='flex flex-col sm:flex-row items-center gap-10'
            aria-label='Secondary Navigation'
          >
            {links?.navigation?.map((link) => (
              <li key={link.text} className='navlist--item'>
                <NavLink activeClassName='' href={link.url}>
                  <a className='navlist--link'>{link.text}</a>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* SOCIAL */}
        <ul
          role={'list'}
          className='flex flex-row items-center gap-4 sm:ml-auto'
          aria-label='Social Links'
        >
          {links?.social?.map((link) => (
            <li key={link.alt}>
              <a aria-label={link?.alt} href={link?.url}>
                <span className='sr-only'>{link.alt}</span>
                <link.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
