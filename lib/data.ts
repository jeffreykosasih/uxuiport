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
    title: 'Health & Wellness App',
    stages: {
      Overview: {
        heading: 'Holistic Health Tracking',
        content:
          'A mobile-first PWA that integrates fitness, nutrition, and mental wellness. Built to encourage small, sustainable habit changes.',
      },
      Empathize: {
        heading: 'Understanding Motivation',
        content:
          'Surveyed 200+ users. 60% abandoned previous apps because of "data entry fatigue." The solution needed to be frictionless.',
      },
      Define: {
        heading: 'Core Challenge',
        content:
          'Users need a way to track habits with minimal effort, otherwise they will churn within the first week.',
      },
      Ideate: {
        heading: 'Gamification & Automation',
        content:
          'Ideas included scanning grocery receipts, auto-importing from wearables, and a "streak" system. Focused on one-tap logging.',
      },
      Prototype: {
        heading: 'Interactive Mockups',
        content:
          'Developed a clickable prototype focusing on the "Quick Add" floating action button and haptic feedback interactions.',
      },
      Test: {
        heading: 'Beta Feedback',
        content:
          'Users loved the "Morning Check-in" feature but found the calorie counter too rigid. Adjusted to flexible "portion" tracking.',
      },
    },
  },
  {
    id: '03',
    title: 'Financial Portfolio',
    stages: {
      Overview: {
        heading: 'Secure Asset Management',
        content:
          'An investment platform prioritizing security and transparency. Designed for the modern investor who values real-time data and privacy.',
      },
      Empathize: {
        heading: 'Trust Issues',
        content:
          'Users are skeptical of new fintech platforms. "If it looks cheap, I don\'t trust it with my money." Visual polish was a functional requirement.',
      },
      Define: {
        heading: 'Building Confidence',
        content:
          'The interface must communicate stability and precision through typography, color theory (trustworthy blues), and lack of clutter.',
      },
      Ideate: {
        heading: 'Visual Language',
        content:
          'Explored "Bank Vault" heavy aesthetics vs. "Tech Minimalist". Chose a Swiss Style minimalist approach with bold data visualization.',
      },
      Prototype: {
        heading: 'Data Viz Components',
        content:
          'Built D3.js chart components to ensure performance with large datasets. Focused on smooth transitions between timeframes.',
      },
      Test: {
        heading: 'Security Audits & UAT',
        content:
          'User Acceptance Testing confirmed that the "Privacy Mode" (blurring balances) was a critical feature for users checking portfolios in public.',
      },
    },
  },
];
