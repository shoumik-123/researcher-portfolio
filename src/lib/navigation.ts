export interface NavItem {
  name: string;
  path?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { 
    name: 'Home', 
    path: '/' 
  },
  { 
    name: 'Professional Experience',
    path: '/experience',
    children: [
      { name: 'UNOPS Experience', path: '/experience/unops' },
      { name: 'BPCL Experience', path: '/experience/bpcl' },
      { name: 'Maskeeters Experience', path: '/experience/maskeeters' },
      { name: 'Advanced Research', path: '/experience/advanced-research' },
    ]
  },
  {
    name: 'Research Journey',
    path: '/research',
    children: [
      { name: 'Lab Experimentations', path: '/research/lab' },
      { name: 'Youth Engagement', path: '/research/youth' },
      { name: 'My PhD Journey', path: '/research/phd' },
    ]
  },
  {
    name: 'About Me',
    path: '/about',
    children: [
      { name: 'Achievements', path: '/achievements' },
      { name: 'Training & Consultancy', path: '/training' },
      { name: 'Education', path: '/education' },
    ]
  },
  {
    name: 'Media & Blog',
    path: '/media',
    children: [
      { name: 'Blog & Insights', path: '/media/blog' },
    ]
  }
];