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
  externalUrl?: string;
  workImage?: string;
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
    title: 'Revo Fitness',
    workImage: '/cs_01/cs_01_test_01.png',
    stages: {
      Overview: {
        content: `As someone who enjoys going to the gym and staying fit, Revo Fitness is one of the places I enjoy working out. My experience with the mobile app made me curious about how the experience could be improved and how the visual style could better match the brand. At the time, the app experience felt limited and mostly focused on a single-page approach. I wanted to expand the rest of the key pages while keeping the same Revo style and energy. The goal was to improve ease of use, create a stronger design system, and make the app feel more complete for members.`,
        image: '/cs_01/cs_01_overview.png',
      },
      Empathize: {
        content: `I started by approaching five gym members for a small conversation about their experience using the app. The conversations went smoothly because they shared similar concerns about style consistency and how the app separates membership access from non-member information. This helped me understand that the issue was not only visual, but also structural. Members needed a clearer way to understand what belonged to their access level and what information was available to everyone. These insights became the foundation for improving the navigation and content structure.`,
        image: '/cs_01/cs_01_emphatize.png',
      },
      Define: {
        content: `After understanding the issue, I defined the problem around access levels, content placement, and feature clarity. I needed to decide which features belonged to each membership level and which features should stay open to everyone. For example, general content such as news, shop information, and updates should be easy to access without confusing it with member-only perks. This helped separate the app into clearer sections with a stronger purpose for each page. The design direction became focused on making access easier to understand while keeping the experience consistent.`,
        image: '/cs_01/cs_01_define.png',
      },
      Ideate: {
        content: `For the design exploration, I used Affinity to organise which parts belonged to each feature group and to adjust the visual direction. I focused on button sizing, spacing, and how much information could fit clearly on screen without forcing unnecessary scrolling. The challenge was making the interface feel complete while still keeping it easy to scan. I explored how the Revo visual style could be carried across new pages without making the app feel crowded. This stage helped me understand which layouts were practical before moving into the full prototype.`,
        image: '/cs_01/cs_01_ideate.png',
      },
      Prototype: {
        content: `Once I understood the structure, I moved into Figma and created the pages from the loading screen through to the profile experience. For the Home page, I placed features that can be accessed at any level and treated them more as information than exclusive perks. For Workout and Member sections, I focused on where the membership-related benefits should live. This made the app feel more organised and easier to understand from the first screen. The prototype connected each page into a clearer flow so the overall experience felt more complete.`,
        image: '/cs_01/cs_01_prototype.png',
      },
      Test: {
        content: `After creating the designs, I showed them to the members while they were resting and asked for their thoughts. The response was supportive, and they felt the new pages were a strong starting point for improving the app experience. They liked that the structure separated information and perks more clearly while still matching the Revo Fitness style. The feedback also suggested that the idea could continue on a deeper scale if more features were developed. This helped confirm that the redesign direction improved clarity, consistency, and the overall approach to using the app.`,
        image: '/cs_01/cs_01_test_01.png',
        images: ['/cs_01/cs_01_test_01.png', '/cs_01/cs_01_test_02.png'],
      },
    },
  },
  {
    id: '02',
    title: 'iDriver',
    workImage: '/cs_02/cs_01_test_02.png',
    stages: {
      Overview: {
        content: `iDriver is a delivery app made specifically for newspaper delivery, helping drivers understand which suburbs and customer addresses have active subscriptions. The main challenge was that the experience and visual design felt outdated, required too many steps, and did not include several features that could make delivery easier. I wanted to modernise the app while adding practical tools that support drivers during their route. The goal was to make suburb access, address checking, and delivery status easier to understand. The final concept supports faster work, clearer route awareness, and a more confident delivery experience.`,
        image: '/cs_02/cs_02_test_01.png',
      },
      Empathize: {
        content: `Each driver is assigned to different suburbs, but one issue with the app was that accessing those suburbs took more time than it should. Drivers also became confused when a customer required a delivery photo because the interface did not clearly show whether the photo belonged to the correct address. This created uncertainty during a task that should feel direct and reliable. I focused on understanding where drivers slowed down, where confusion happened, and what information needed to be visible at the right moment. These findings showed that the app needed clearer structure, better status feedback, and more confidence around proof of delivery.`,
        image: '/cs_02/cs_02_emphatize.png',
      },
      Define: {
        content: `To define the problem, I needed to understand what drivers struggled to access, where they needed to go, what step they had to complete, and what they needed to deliver. The app had to support drivers before and during the route instead of making them search for basic information. I defined the main opportunity as improving task clarity once the access and navigation issues were solved. This meant identifying which features could reduce repeated effort and which features could give drivers more confidence. The design direction became focused on faster access, clearer instructions, and better delivery visibility.`,
      },
      Ideate: {
        content: `Because this is a delivery app, I explored how map navigation could work together with list views to help drivers understand their route better. One interesting insight was that drivers often become more comfortable using list view during the last two weeks of a run because they are already familiar with the area. I wanted the app to support both behaviours instead of forcing one navigation style. Adding package counts, route visibility, and delivered status would help drivers understand the situation faster. This strategy made the app more flexible for both new routes and familiar delivery routines.`,
      },
      Prototype: {
        content: `I used Figma to create the design flow from run selection to route checking. The prototype focused on making the app feel immediate, modern, and easier to understand from the first interaction. Small visual details mattered because the previous app did not use font, logo placement, buttons, and spacing in a consistent way. I redesigned these elements so the interface felt cleaner and more reliable during delivery. The prototype helped show how drivers could move through the app with fewer interruptions and clearer feedback.`,
      },
      Test: {
        content: `When I showed the designs to drivers, they could understand the flow faster from the start. They liked that they did not have to complete a compliance check every time they were about to log in. They also found it useful to see previous-day performance and appreciated having bright and dark mode available directly in the app. From their perspective, these additions made the app feel more practical and more pleasant to use. The feedback confirmed that the redesign improved access, reduced repeated steps, and made delivery work feel more confident.`,
        image: '/cs_02/cs_02_test_01.png',
        images: ['/cs_02/cs_02_test_01.png', '/cs_02/cs_01_test_02.png'],
      },
    },
  },
  {
    id: '03',
    title: 'Port Jeffrey',
    externalUrl: 'https://www.jefri.dev',
    workImage: '/cs_03/cs_03_profile.png',
    stages: {
      Overview: {
        content: `Creating projects is one of the ways to stand out when it comes to job applications. Port Jeffrey was built as a 3D model portfolio using Three.js to showcase Jeffrey's project ideas in a more memorable way. The technical challenge was learning how to use 3D objects while still making the experience clear for users. From a design perspective, the challenge was making the objects easy to explore without confusing the object itself with the meaning behind it. Since the project used an island theme, the strategy was to make each object more obvious by adding names above them and shaping the whole experience like a small digital world.`,
        image: '/cs_03/cs_03_profile.png',
        images: [
          '/cs_03/cs_03_profile.png',
          '/cs_03/cs_03_home_01.png',
          '/cs_03/cs_03_home_02.png',
          '/cs_03/cs_03_welcome_01.png',
          '/cs_03/cs_03_welcome_02.png',
        ],
      },
      Empathize: {
        content: `I considered how recruiters and visitors often scan portfolio projects quickly before deciding whether to explore deeper. A regular list of technical projects can be useful, but it may not always show the creator's personality or creative thinking. I wanted Port Jeffrey to create curiosity from the first moment while still making the projects easy to access. The island concept gave the portfolio a stronger sense of identity, but it also introduced the risk of users not knowing what each object meant. This helped me focus on balancing personality with clear interaction cues.`,
      },
      Define: {
        content: `The main problem was presenting IT projects in a way that felt engaging without hiding the actual work behind the 3D concept. I defined the goal as creating a digital space where each project object could be discovered naturally and understood quickly. The experience needed to feel playful, but not confusing. It also needed to explain what each object represented before users lost interest. This definition helped keep the 3D direction purposeful rather than purely decorative.`,
      },
      Ideate: {
        content: `I explored how the island theme could turn the portfolio into a small world where each object represented a project idea. The key strategy was to make the object names visible so users did not have to guess what they were looking at. I considered how the camera, object placement, and labels could guide attention without overwhelming the scene. The goal was to make exploration feel fun while keeping the project structure readable. This direction helped the portfolio feel more memorable while still supporting job-application storytelling.`,
      },
      Prototype: {
        content: `The prototype focused on combining Three.js objects with a clear portfolio navigation structure. I tested how users could move through the scene, recognise objects, and understand what each project represented. The challenge was making the 3D environment feel interactive without making users work too hard. I used labels, spacing, and a clear visual hierarchy to support exploration. The prototype made the portfolio feel more like an experience while still keeping the content accessible.`,
      },
      Test: {
        content: `Testing focused on whether users understood that Port Jeffrey was still a portfolio and not only a 3D experiment. Feedback showed that the concept felt memorable, but project access needed to stay obvious. Adding names above objects helped users connect each visual element with its meaning more quickly. I refined the experience so visitors could enjoy the island theme while still reaching project information without confusion. The result is a portfolio that communicates Jeffrey's ideas through a more distinctive digital space.`,
      },
    },
  },
  {
    id: '04',
    title: 'Katsu Seiba',
    externalUrl: 'https://katsuseiba.vercel.app',
    workImage: '/cs_04/cs_04_home_01.png',
    stages: {
      Overview: {
        content: `Katsu Seiba is a Japanese restaurant website concept that I wanted to make minimalistic but still useful. Some restaurant websites I found had issues with how they presented themselves and how seamless the booking experience felt. I also noticed that colour choices between fonts and backgrounds can strongly affect whether a restaurant site feels premium, calm, or difficult to read. The challenge was creating a site that looked refined while still helping users find what they need quickly. The final concept focuses on simple navigation, clean presentation, and a smoother path toward booking.`,
        image: '/cs_04/cs_04_home_01.png',
        images: [
          '/cs_04/cs_04_home_01.png',
          '/cs_04/cs_04_home_02.png',
          '/cs_04/cs_04_home_03.png',
        ],
      },
      Empathize: {
        content: `I considered how people use restaurant websites when deciding where to eat or whether to make a booking. Users usually want to understand the food, the atmosphere, the location, and the booking process without searching too much. The issue with many restaurant websites is that they either look attractive but hide practical information, or they show information without creating a strong mood. I wanted Katsu Seiba to feel calm and minimal while still being helpful. This helped guide a design that values presentation and usability equally.`,
      },
      Define: {
        content: `The defined problem was to create a restaurant website that presents the brand clearly while making booking feel seamless. Users need to understand the restaurant identity, browse key information, and know what action to take next. I also needed to choose colours that made the typography readable while still matching a Japanese-inspired visual direction. The site had to feel minimal, but not empty. This gave the concept a balance between calm branding, useful information, and clear action.`,
      },
      Ideate: {
        content: `I explored layouts that made the restaurant feel refined through spacing, imagery, and simple navigation. The goal was to make the site feel like a smooth introduction to the restaurant rather than just a page of information. I tested how background colour, font colour, and image placement could work together without creating visual noise. The strongest direction used fewer elements with more intention so each section felt calm and readable. This approach helped the restaurant identity feel more polished and easier to trust.`,
      },
      Prototype: {
        content: `The prototype focused on building a smooth browsing and booking experience across the website. I used consistent spacing, readable typography, and clear section structure to make the site feel complete. The challenge was keeping the design minimal while still giving users enough information to feel confident. I refined the page flow so the user could move from first impression to practical details without friction. The prototype showed how Katsu Seiba could present itself with both clarity and style.`,
      },
      Test: {
        content: `Testing focused on whether the website communicated the restaurant mood clearly and made booking feel easy. I looked at whether users could understand the restaurant style, read the content comfortably, and find the next action without hesitation. Feedback helped refine hierarchy, spacing, and contrast between text and background. The design became cleaner while still keeping the useful information visible. The final result supports a polished restaurant impression and a smoother decision-making process for users.`,
      },
    },
  },
];
