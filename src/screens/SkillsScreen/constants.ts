import { Skill, SkillLevel } from './interfaces.ts';
import typeScriptIcon from '@assets/icons/typescriptIcon.svg';
import javaScriptIcon from '@assets/icons/javascriptIcon.svg';
import reactIcon from '@assets/icons/reactIcon.svg';
import reduxIcon from '@assets/icons/reduxIcon.svg';
import reduxSagaIcon from '@assets/icons/reduxSage.svg';
import cypressIcon from '@assets/icons/cypressIcon.svg';
import dockerIcon from '@assets/icons/dockerIcon.svg';
import jestIcon from '@assets/icons/jestIcon.svg';
import mongoIcon from '@assets/icons/mongoIcon.svg';
import muiIcon from '@assets/icons/muiIcon.svg';
import mysqlIcon from '@assets/icons/mysqlIcon.svg';
import prismaIcon from '@assets/icons/prismaIcon.svg';
import sassIcon from '@assets/icons/sassIcon.svg';
import storybookIcon from '@assets/icons/storybookIcon.svg';
import viteIcon from '@assets/icons/viteIcon.svg';
import webpackIcon from '@assets/icons/webpackIcon.svg';

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Typescript',
    level: SkillLevel.Advanced,
    iconSrc: typeScriptIcon,
    link: 'https://www.typescriptlang.org',
  },
  {
    id: 2,
    title: 'Javascript',
    level: SkillLevel.Advanced,
    iconSrc: javaScriptIcon,
    link: 'https://uk.wikipedia.org/wiki/JavaScript',
  },
  {
    id: 3,
    title: 'React',
    level: SkillLevel.Advanced,
    iconSrc: reactIcon,
    link: 'https://react.dev',
  },
  {
    id: 4,
    title: 'Redux',
    level: SkillLevel.Advanced,
    iconSrc: reduxIcon,
    link: 'https://redux.js.org/',
  },
  {
    id: 5,
    title: 'Redux Sage',
    level: SkillLevel.Advanced,
    iconSrc: reduxSagaIcon,
    link: 'https://redux-saga.js.org',
  },
  {
    id: 6,
    title: 'Webpack',
    level: SkillLevel.Competent,
    iconSrc: webpackIcon,
    link: 'https://webpack.js.org',
  },
  {
    id: 7,
    title: 'Vite',
    level: SkillLevel.Competent,
    iconSrc: viteIcon,
    link: 'https://vitejs.dev',
  },
  {
    id: 8,
    title: 'Sass',
    level: SkillLevel.Competent,
    iconSrc: sassIcon,
    link: 'https://sass-lang.com',
  },
  {
    id: 9,
    title: 'Mui',
    level: SkillLevel.Advanced,
    iconSrc: muiIcon,
    link: 'https://mui.com',
  },
  {
    id: 10,
    title: 'Cypress',
    level: SkillLevel.Beginner,
    iconSrc: cypressIcon,
    link: 'https://www.cypress.io/',
  },
  {
    id: 11,
    title: 'Jest',
    level: SkillLevel.Competent,
    iconSrc: jestIcon,
    link: 'jestjs.io',
  },
  {
    id: 12,
    title: 'MySql',
    level: SkillLevel.Competent,
    iconSrc: mysqlIcon,
    link: 'https://www.mysql.com/',
  },
  {
    id: 13,
    title: 'MongoDB',
    level: SkillLevel.Competent,
    iconSrc: mongoIcon,
    link: 'https://www.mongodb.com',
  },
  {
    id: 14,
    title: 'Storybook',
    level: SkillLevel.Competent,
    iconSrc: storybookIcon,
    link: 'https://storybook.js.org',
  },
  {
    id: 15,
    title: 'Docker',
    level: SkillLevel.Competent,
    iconSrc: dockerIcon,
    link: 'https://www.docker.com',
  },
  {
    id: 16,
    title: 'Prisma',
    level: SkillLevel.Competent,
    iconSrc: prismaIcon,
    link: 'https://www.prisma.io',
  },
];
