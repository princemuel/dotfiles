import { IconProps } from 'common';

type Props = {
  id: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
  alt: string;
  classes: string;
};

const SocialLink = ({ alt, url, icon: Icon, classes }: Props) => {
  return (
    <li>
      <a
        aria-label={alt}
        href={url}
        className={`${classes ? classes : ''}`?.trim()}
      >
        <span className='sr-only'>{alt}</span>
        <Icon aria-hidden='true' className='icon' />
      </a>
    </li>
  );
};

export { SocialLink };
