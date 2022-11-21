import { links } from 'common';
import { Logo, NavLink } from 'components/atoms';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className='h-container bg-neutral-100 w-full-shadow'>
        <Logo className='' />

        <nav className=''>
          <ul role={'list'} className='' aria-label='Primary Navigation'>
            {links?.navigation?.map((link) => (
              <li key={link.text} className='hover:text-primary-100'>
                <NavLink activeClassName='' href={link.url}>
                  <a className=''>{link.text}</a>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
