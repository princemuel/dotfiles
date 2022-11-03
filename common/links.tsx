import * as React from 'react';
import {
  IconGithubSVG,
  IconLinkedInSVG,
  IconTwitterSVG,
  LogoSVG,
} from './images';

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {}

export const links = {
  navigation: [
    {
      id: 'home',
      text: 'home',
      url: '/',
    },
    {
      id: 'portfolio',
      text: 'portfolio',
      url: '/portfolio',
    },
    {
      id: 'contact',
      text: 'contact me',
      url: '/speakers',
    },
  ],
  logo: {
    icon: (props: IconProps) => <LogoSVG {...props} />,
  },
  social: [
    {
      id: 'icon-github',
      url: 'https://github.com/princemuel',
      icon: (props: IconProps) => <IconGithubSVG {...props} />,
      alt: 'github',
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com/iamprincemuel',
      icon: (props: IconProps) => <IconTwitterSVG {...props} />,
      alt: 'twitter',
    },
    {
      id: 'icon-linkedin',
      url: 'https://www.linkedin.com/in/princemuel',
      icon: (props: IconProps) => <IconLinkedInSVG {...props} />,
      alt: 'linkedin',
    },
  ],
};
