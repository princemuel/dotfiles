import { links } from 'common';
import { SocialLink } from 'components/atoms';

type Props = {
  links: typeof links;
};

const SocialLinks = ({ links }: Props) => {
  return (
    <ul
      role={'list'}
      className='md:grid-in-social flex items-center gap-4 md:justify-self-end lg:self-end'
      aria-label='Social Links'
    >
      {links?.social?.map((link) => (
        <SocialLink key={link?.alt} {...link} />
      ))}
    </ul>
  );
};

export { SocialLinks };
