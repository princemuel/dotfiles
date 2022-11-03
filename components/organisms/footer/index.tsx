import { links } from 'common';
import { Logo, NavLink } from 'components/atoms';
import { SocialLinks } from 'components/molecules';

const Footer = () => {
  // text-neutral-100 bg-primary-300;
  return (
    <footer>
      <div className='h-container flex flex-col sm:flex-row items-center gap-10 py-20 sm:py-10 bg-primary-300 w-full-shadow'>
        <Logo className='text-neutral-100' />
        {/* NAVIGATION */}
        <nav>
          <ul
            role={'list'}
            className='flex flex-col sm:flex-row items-center gap-10'
            aria-label='Secondary Navigation'
          >
            {links?.navigation?.map((link) => (
              <li
                key={link.text}
                className='text-neutral-100 hover:text-primary-100'
              >
                <NavLink activeClassName='' href={link.url}>
                  <a>{link.text}</a>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks links={links} />
      </div>
    </footer>
  );
};

export { Footer };
