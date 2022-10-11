import { IconGithubSVG, IconLinkedInSVG, IconTwitterSVG } from './images';

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
      text: 'contacct me',
      url: '/speakers',
    },
  ],

  social: [
    {
      id: 'icon-github',
      url: 'https://github.com/princemuel',
      icon: IconGithubSVG,
      alt: 'github',
    },
    {
      id: 'icon-twitter',
      url: 'https://www.twitter.com/iamprincemuel',
      icon: IconTwitterSVG,
      alt: 'twitter',
    },
    {
      id: 'icon-linkedin',
      url: 'https://www.linkedin.com/in/princemuel',
      icon: IconLinkedInSVG,
      alt: 'linkedin',
    },
  ],
};
