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
    title: 'Revo Fitness - Redesign',
    stages: {
      Overview: {
        content:
          'To expand the consistency of the brand design identity across the mobile platform, the app was redesigned to be non-obsolete and consistent with the brand.',
        image: '/cs_01/cs_01_test_01.png',
      },
      Empathize: {
        content:
          'Conducted interviews with 5 members on the gym where the key pain point was old design and confusing navigation. They needed clarity and ease of use.',
        image: '/cs_01/cs_01_emphatize.png',
      },
      Define: {
        content:
          ' Easy navigation and consistent design specifically for members accessing based on the level.',
        image: '/cs_01/cs_01_define.png',
      },
      Ideate: {
        content:
          'How to consistently design that adapt from the website to the mobile app thus seperate the functionality of access with different levels.',
        image: '/cs_01/cs_01_ideate.png',
      },
      Prototype: {
        content:
          'Created wireframes in Figma focusing on information hierarchy along with Affinity for adjusting the designs,',
        image: '/cs_01/cs_01_prototype.png',
      },
      Test: {
        content:
          'Tested with 5 users. 4/5 enjoyed the new design and navigation with easier approach on accessing the information',
        image: '/cs_01/cs_01_test_01.png',
        images: ['/cs_01/cs_01_test_01.png', '/cs_01/cs_01_test_02.png'],
      },
    },
  },
  {
    id: '02',
    title: 'iDriver - Redesign',
    stages: {
      Overview: {
        content:
          'A concept redesign for delivering app specifically newspaper delivery that focused on making drivers more efficient and easy to use.',
        image: '/cs_02/cs_02_test_01.png',
      },
      Empathize: {
        content:
          'Reviewed common pain points from some drivers which are too many steps on selecting run and other features related to the app.',
        image: '/cs_02/cs_02_emphatize.png',
      },
      Define: {
        content:
          'The experience should help users quickly understand as a driver how to use the app more efficiently.',
      },
      Ideate: {
        content:
          'Explored ways to view how many papers that need to be delivered on map or list mode and also reduce steps for users.',
      },
      Prototype: {
        content:
          'Built high-fidelity through Figma to validate the design and the flow of the app.',
      },
      Test: {
        content:
          'Early feedback showed faster task completion and better confidence in selecting packages. Iterations were made around spacing and copy clarity.',
        image: '/cs_02/cs_02_test_01.png',
        images: ['/cs_02/cs_02_test_01.png', '/cs_02/cs_01_test_02.png'],
      },
    },
  },
  {
    id: '03',
    title: '-',
    stages: {
      Overview: {
        content: 'More case on the way',
      },
      Empathize: {
        content: 'More case on the way',
      },
      Define: {
        content: 'More case on the way',
      },
      Ideate: {
        content: 'More case on the way',
      },
      Prototype: {
        content: 'More case on the way',
      },
      Test: {
        content: 'More case on the way',
      },
    },
  },
];
