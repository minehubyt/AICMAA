
import { PolicyIssue, NewsItem } from './types';

export const POLICY_ISSUES: PolicyIssue[] = [
  {
    id: 'economic-growth',
    title: 'Economic Growth & Competitiveness',
    description: 'Advancing policies that drive sustainable growth across India’s industrial sectors.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'tax-policy',
    title: 'Taxation & Fiscal Policy',
    description: 'Promoting a fair, transparent, and predictable tax environment for CMAs and corporations.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Harnessing technology to modernize professional management and corporate reporting.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sustainable-governance',
    title: 'Sustainable Governance',
    description: 'Integrating ESG principles into corporate strategy and management accounting.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200'
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: '1',
    date: 'Oct 24, 2024',
    category: 'Press Release',
    title: 'AICMAA Urges Government to Expand Professional Scope for CMAs in New Budget',
    link: '#'
  },
  {
    id: '2',
    date: 'Oct 20, 2024',
    category: 'Report',
    title: '2024 Corporate Governance Survey: A New Era of Transparency',
    link: '#'
  },
  {
    id: '3',
    date: 'Oct 15, 2024',
    category: 'Statement',
    title: 'AICMAA Welcomes New ESG Reporting Standards for Indian Corporations',
    link: '#'
  }
];
