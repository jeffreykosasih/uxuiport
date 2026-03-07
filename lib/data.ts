export type Stage =
  | 'Overview'
  | 'Empathize'
  | 'Define'
  | 'Ideate'
  | 'Prototype'
  | 'Test';

export interface ProjectData {
  id: string;
  title: string;
  stages: Record<
    Stage,
    {
      heading: string;
      content: string;
      image?: string;
      images?: string[];
    }
  >;
}

export const STAGES: Stage[] = [
  'Overview',
  'Empathize',
  'Define',
  'Ideate',
  'Prototype',
  'Test',
];

export const PROJECTS: ProjectData[] = [
  {
    id: '01',
    title: 'Redesign',
    stages: {
      Overview: {
        heading: 'Revo Fitness',
        content:
          'To expand the consistency of the brand design identity across the mobile platform, the app was redesigned to be non-obsolete and consistent with the brand.',
        image: '/cs_01/cs_01_overview.png',
      },
      Empathize: {
        heading: 'User Research',
        content:
          'Conducted interviews with 5 members on the gym where the key pain point was old design and confusing navigation. They needed clarity and ease of use.',
        image: '/cs_01/cs_01_emphatize.png',
      },
      Define: {
        heading: 'Problem Statement',
        content:
          ' Easy navigation and consistent design specifically for members accessing based on the level.',
        image: '/cs_01/cs_01_define.png',
      },
      Ideate: {
        heading: 'Brainstorming Solutions',
        content:
          'How to consistently design that adapt from the website to the mobile app thus seperate the functionality of access with different levels.',
        image: '/cs_01/cs_01_ideate.png',
      },
      Prototype: {
        heading: 'Low & High Fidelity',
        content:
          'Created wireframes in Figma focusing on information hierarchy along with Affinity for adjusting the designs,',
        image: '/cs_01/cs_01_prototype.png',
      },
      Test: {
        heading: 'Usability Testing',
        content:
          'Tested with 5 users. 4/5 enjoyed the new design and navigation with easier approach on accessing the information',
        image: '/cs_01/cs_01_test_01.png',
        images: ['/cs_01/cs_01_test_01.png', '/cs_01/cs_01_test_02.png'],
      },
    },
  },
  {
    id: '02',
    title: 'Redesign',
    stages: {
      Overview: {
        heading: 'iDriver',
        content: 'More case on the way',
      },
      Empathize: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Define: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Ideate: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Prototype: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Test: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
    },
  },
  {
    id: '03',
    title: '-',
    stages: {
      Overview: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Empathize: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Define: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Ideate: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Prototype: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
      Test: {
        heading: 'More case on the way',
        content: 'More case on the way',
      },
    },
  },
];
