import * as React from 'react';
import {
  IconArrowDownSVG,
  IconArrowLeftSVG,
  IconArrowRightSVG,
  IconCloseSVG,
  IconFacebookSVG,
  IconGithubSVG,
  IconHamburgerSVG,
  IconInstagramSVG,
  IconLinkedInSVG,
  IconTwitterSVG,
  LogoSVG,
} from './svg-icons';

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const icons = {
  logo: (props: IconProps) => <LogoSVG {...props} />,
  arrow: {
    down: (props: IconProps) => <IconArrowDownSVG {...props} />,
    left: (props: IconProps) => <IconArrowLeftSVG {...props} />,
    right: (props: IconProps) => <IconArrowRightSVG {...props} />,
  },
  mobile: {
    open: (props: IconProps) => <IconHamburgerSVG {...props} />,
    close: (props: IconProps) => <IconCloseSVG {...props} />,
  },
};

export const links = {
  navigation: [
    {
      id: 'home',
      text: 'home',
      url: '/',
    },
    {
      id: 'projects',
      text: 'projects',
      url: '/projects',
    },
    {
      id: 'blog',
      text: 'blog',
      url: '/blog',
    },
    {
      id: 'contact',
      text: 'contact me',
      url: '/contact',
    },
  ],
  social: [
    {
      id: 'icon-github',
      url: 'https://github.com/princemuel',
      icon: (props: IconProps) => <IconGithubSVG {...props} />,
      alt: 'github',
    },
    {
      id: 'icon-facebook',
      url: 'https://www.facebook.com/mikeychuks',
      icon: (props: IconProps) => <IconFacebookSVG {...props} />,
      alt: 'facebook',
    },
    {
      id: 'icon-instagram',
      url: 'https://www.instagram.com/princemuel',
      icon: (props: IconProps) => <IconInstagramSVG {...props} />,
      alt: 'instagram',
    },
    {
      id: 'icon-linkedin',
      url: 'https://www.linkedin.com/in/princemuel',
      icon: (props: IconProps) => <IconLinkedInSVG {...props} />,
      alt: 'linkedin',
    },

    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com/iamprincemuel',
      icon: (props: IconProps) => <IconTwitterSVG {...props} />,
      alt: 'twitter',
    },
  ],
};
