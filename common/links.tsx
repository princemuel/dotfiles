import * as React from 'react';
import {
  IconArrowDownSVG,
  IconArrowLeftSVG,
  IconArrowRightSVG,
  IconCloseSVG,
  IconGithubSVG,
  IconHamburgerSVG,
  IconLinkedInSVG,
  IconTwitterSVG,
  LogoSVG,
} from './images';

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
