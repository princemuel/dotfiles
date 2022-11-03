import { links } from 'common';
import { SocialLink } from 'components/atoms';

type Props = {
  links: typeof links;
};

const SocialLinks = ({ links }: Props) => {
  return (
    <ul
      role={'list'}
      className='flex items-center gap-4 sm:ml-auto'
      aria-label='Social Links'
    >
      {links?.social?.map((link) => (
        <SocialLink key={link?.alt} {...link} />
      ))}
    </ul>
  );
};

export { SocialLinks };
