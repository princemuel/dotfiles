import { links } from 'common';
import { Logo, NavLink } from 'components/atoms';
import { SocialLinks } from 'components/molecules';

const Footer = () => {
  return (
    <footer className='h-container mt-40 bg-primary-300 w-full-shadow'>
      <section className="relative py-32 text-neutral-100/75 before:content-[''] before:absolute before:top-0 before:left-2/4 before:w-40 before:h-2 before:bg-primary-100 before:-translate-x-2/4 before:md:left-0 before:md:translate-x-0">
        <div className='flex flex-col lg:flex-row items-center md:items-start lg:justify-between gap-12 mb-12 text-center md:text-left'>
          <Logo className='text-neutral-100' />
          {/* NAVIGATION */}
          <nav>
            <ul
              role={'list'}
              className='flex flex-col md:flex-row items-center gap-14'
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
        </div>

        <div className='grid md:grid-areas-ipad lg:grid-areas-desktop md:grid-cols-2 justify-items-center md:justify-items-start gap-12 mt-12 body-200 text-center md:text-left'>
          <p className='md:grid-in-info max-w-[60ch]'>
            Hi there! Thanks for sticking with me till this point. If
            you&quot;re looking for a fast, perfomant, user-friendly and
            accessible website to represent your product or business, a
            consultation or you just want to say Hi👋, please feel free to reach
            out. I will do my best to respond. 😊 The quickest way to reach me
            is via email.
          </p>
          <p className='md:grid-in-copy'>
            Copyright &copy; {new Date().getFullYear()} Prince Muel. All Rights
            Reserved
          </p>
          <SocialLinks links={links} />
        </div>
      </section>
    </footer>
  );
};

export { Footer };
