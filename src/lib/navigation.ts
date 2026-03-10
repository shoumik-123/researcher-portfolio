export interface NavItem {
  name: string;
  path?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { 
    name: 'Research',
    children: [
      { name: 'Projects', path: '/projects' },
      { name: 'Publications', path: '/publications' },
      { name: 'Grants', path: '/grants' },
      { name: 'Conference Contributions', path: '/conferences' },
    ]
  },
  {
    name: 'Achievements',
    children: [
      { name: 'Awards', path: '/awards' },
      { name: 'Media', path: '/media' },
      { name: 'News', path: '/news' },
    ]
  },
  {
    name: 'Academic Service',
    children: [
      { name: 'Teaching', path: '/teaching' },
      { name: 'Supervision', path: '/supervision' },
      { name: 'Peer-Reviews', path: '/peer-reviews' },
      { name: 'Editorial Roles', path: '/editorial-roles' },
      { name: 'Committee and Board Duties', path: '/committees' },
    ]
  },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'CV', path: '/cv' },
  { name: 'Contact', path: '/contact' },
];