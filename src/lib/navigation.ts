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
    name: 'Experience',
    children: [
      { name: 'UNOPS Experience', path: '/experience/unops' },
      { name: 'BPCL Experience', path: '/experience/bpcl' },
      { name: 'Maskeeters Experience', path: '/experience/maskeeters' },
    ]
  },
  {
    name: 'Research',
    children: [
      { name: 'My Research Journey', path: '/research/journey' },
      { name: 'Publications', path: '/research/publications' },
      { name: 'International Conferences', path: '/research/conferences' },
      { name: 'Laboratory Experience', path: '/research/laboratory' },
      { name: 'Mentoring & Student Supervision', path: '/research/mentoring' },
      { name: 'My PhD Journey', path: '/research/phd' },
    ]
  },
  {
    name: 'Achievements',
    children: [
      { name: 'Career Achievements', path: '/achievements/career' },
      { name: 'Research Publications', path: '/achievements/publications' },
      { name: 'Awards & Recognition', path: '/achievements/awards' },
      { name: 'Certificates', path: '/achievements/certificates' },
    ]
  },
  {
    name: 'Training & Consultancy',
    children: [
      { name: 'SAIBES Activities', path: '/training/saibes' },
      { name: 'Training Programs', path: '/training/programs' },
      { name: 'Consultancy Work', path: '/training/consultancy' },
      { name: 'Youth Engagement Initiatives', path: '/training/youth' },
    ]
  },
  {
    name: 'Media & Blog',
    children: [
      { name: 'Media Coverage', path: '/media/coverage' },
      { name: 'Blog & Insights', path: '/media/blog' },
    ]
  }
];