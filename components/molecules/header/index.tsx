import { links } from 'common';
import { Logo, NavLink } from 'components/atoms';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <Logo />

      <nav>
        <ul role={'list'} className='' aria-label='Primary Navigation'>
          {links?.navigation?.map((link) => (
            <li key={link.text}>
              <NavLink activeClassName='' href={link.url}>
                <a>{link.text}</a>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
