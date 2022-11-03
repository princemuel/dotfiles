import { IconProps } from 'common';

type Props = {
  id: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
  alt: string;
};

const SocialLink = ({ alt, url, icon: Icon }: Props) => {
  return (
    <li>
      <a
        aria-label={alt}
        href={url}
        className='text-neutral-100 hover:text-primary-100'
      >
        <span className='sr-only'>{alt}</span>
        <Icon aria-hidden='true' className='icon' />
      </a>
    </li>
  );
};

export { SocialLink };
