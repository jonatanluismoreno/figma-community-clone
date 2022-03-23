interface Props {
  name: 'profile1' | 'profile2' | 'profile3' | 'profile4' | 'profilefigma' | 'main1' | 'main2' | 'plugin1' | 'plugin2' | 'plugin3' | 'plugin4';
  title: string;
  description: string;
  id: number;
}

export const PLUGINS : Props[] = [
  {
    name: 'plugin1',
    title: 'Offset Resizer',
    description: 'Offset frames, components and component sets by a uniform distance from their contents.',
    id: 1
  },
  {
    name: 'plugin2',
    title: 'Auto Layout Grids',
    description: '💪🏻 Use the native Figma »Layout Grids« together with Auto Layout!',
    id: 2
  },
  {
    name: 'plugin3',
    title: 'Automator',
    description: 'Automate your Figma workflows.Automator is currently in private beta. Join the waitlist to be one of the first to use Automator.See the Automator Playground file to learn more about how Automator works.Learn more at automator.design. Made by Tricycle.',
    id: 3
  },
  {
    name: 'plugin4',
    title: '',
    description: '',
    id: 4
  },
  {
    name: 'plugin4',
    title: '',
    description: '',
    id: 5
  },
  {
    name: 'plugin4',
    title: '',
    description: '',
    id: 6
  },
  {
    name: 'plugin4',
    title: '',
    description: '',
    id: 7
  },
  {
    name: 'plugin4',
    title: '',
    description: '',
    id: 8
  },
]

interface PropsExtended {
  picture : 'extended1' | 'extended2' | 'extended3' | 'extended4' | 'extended5' | 'extended6' | 'extended7' | 'extended8' | 'extended9' | 'extended10' | 'extended11';
  name : string;
  description : string;
  installs : number;
  lastUpdated : string;
  creator : string[];
}

export const EXTENDEDPLUGINS : PropsExtended[] = [
  {
    picture: 'extended1',
    name: 'Unsplash',
    description: 'Insert beautiful images from Unsplash straight into your designs. The Unsplash License allows images to be used freely for both commercial and personal projects. Learn more about Unsplash at https://unsplash.com/about',
    installs: 949000,
    lastUpdated : '4 months ago',
    creator: [
      'Kirill Zakharov',
      'Liam Martens',
      'Unsplash'
    ]
  },
  {
    picture: 'extended2',
    name: 'Iconify',
    description: 'Import Material Design Icons, FontAwesome, Jam Icons, EmojiOne, Twitter Emoji and many other icons (more than 100 icon sets containing over 100,000 icons) to Figma document as vector shapes.',
    installs: 926000,
    lastUpdated : 'last month',
    creator: [
      'Iconify',
      'Vjacheslav Trushkin'
    ]
  },
  {
    picture: 'extended3',
    name: 'Material Design Icons',
    description: 'Instant easy access to the entire Material Design Icons library: 35,000+ icons in PNG and SVG at your fingertips. Search icons by name or scroll through the entire list. Filter by category, change style, size, and color. Available in all styles: outlined, filled, sharp, rounded, and two-tone.',
    installs: 609000,
    lastUpdated : '17 days ago',
    creator: [
      'Icons8',
    ]
  },
  {
    picture: 'extended4',
    name: 'Lorem ipsum',
    description: 'Generate ‘Lorem ipsum’ to fill your text layers with dummy text. Select all the text layers you want to generate ‘Lorem ipsum’ for then click ‘Generate’ — it will generate for each layer uniquely. ‘Auto-generate’ will automatically fill the selected layers with the perfectly amount of ‘Lorem ipsum’ to fit their existing frame.',
    installs: 473000,
    lastUpdated : '2 years ago',
    creator: [
      'Dave Williames',
    ]
  },
  {
    picture: 'extended5',
    name: 'Content Reel',
    description: 'Design layouts more efficiently by pulling text strings, images, and icons from one palette. Content Reel lets you create custom content and share it with other Figma users. Collaboration has never been easier!',
    installs: 442000,
    lastUpdated : '3 months ago',
    creator: [
      'Microsoft',
      'Eugene Gavriloff'
    ]
  },
  {
    picture: 'extended6',
    name: 'Autoflow',
    description: 'Autoflow makes it easy to draw flows. Simply select 2 objects and a line will be magically drawn between them.',
    installs: 400000,
    lastUpdated : 'last year',
    creator: [
      'David Zhao & Yitong Zhang'
    ]
  },
  {
    picture: 'extended7',
    name: 'Remove BG',
    description: 'Remove the background of images automatically with just a single click - using the remove.bg API.',
    installs: 391000,
    lastUpdated : '8 months ago',
    creator: [
      'Aaron Iker'
    ]
  },
  {
    picture: 'extended8',
    name: 'Icons8 - icons, illustrations, photos',
    description: 'Keep your flow with the largest and most consistent collection of curated graphics. Get 300,000+ icons, photos, and illustrations without ever needing to leave Figma!',
    installs: 326000,
    lastUpdated : 'last month',
    creator: [
      'Icons8',
    ]
  },
  {
    picture: 'extended9',
    name: 'Vectary 3D Elements',
    description: 'Vectary 3D plugin for Figma is adding the missing third dimension to your 2D designs. Place your Figma design into a predefined 3D mockup or your custom 3D element. Set your desired perspective in 3D and place the result into the scene with one click.',
    installs: 318000,
    lastUpdated : 'last year',
    creator: [
      'Vectary'
    ]
  },
  {
    picture: 'extended10',
    name: 'Figmotion',
    description: 'Figmotion is an animation tool built right in Figma. This makes the entry into animation easier and more convenient as there is no need to switch to a completely separate motion tool such as Principle, Haiku or After Effects. Figmotion makes the animation hand-off to developers more manageable as well as it is built with web technologies in mind.',
    installs: 307000,
    lastUpdated : '4 months ago',
    creator: [
      'Liam Martens'
    ]
  },
  {
    picture: 'extended11',
    name: 'Blobs',
    description: 'Create organic blob shapes with the click of a button. Every shape that is generated is unique to the last. You can control how unique a shape is along with how many points it has. Shapes are created using SVG, so you get those oh-so-sweet bézier curves.',
    installs: 306000,
    lastUpdated : '2 months ago',
    creator: [
      'Dylan Feltus'
    ]
  },

]