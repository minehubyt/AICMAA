
import { PolicyIssue, NewsItem, AICMAAEvent, Notice, GalleryItem } from './types';

export const POLICY_ISSUES: PolicyIssue[] = [
  {
    id: 'economic-growth',
    title: 'Economic Growth & Competitiveness',
    description: 'Advancing policies that drive sustainable growth across India’s industrial sectors.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200'
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

export const EVENTS: AICMAAEvent[] = [
  {
    id: 'event-1',
    title: 'National Cost Summit 2025: The AI Frontier',
    description: 'A flagship three-day summit bringing together India’s leading cost management experts, technology pioneers, and policy makers to discuss the future of AI-driven industrial accounting.',
    date: '2025-08-15T09:00:00',
    time: '09:00 AM - 06:00 PM',
    venue: 'Vigyan Bhawan, New Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1400',
    type: 'forthcoming',
    category: 'Annual Summit'
  },
  {
    id: 'event-2',
    title: 'CMA Leadership Roundtable: ESG and Global Compliance',
    description: 'An exclusive invite-only session for senior members to discuss emerging ESG frameworks and their implications for Indian manufacturing competitiveness.',
    date: '2025-05-22T14:30:00',
    time: '02:30 PM - 05:30 PM',
    venue: 'The Oberoi, Mumbai',
    image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1400',
    type: 'forthcoming',
    category: 'Workshop'
  },
  {
    id: 'event-5',
    title: 'Digital CFO Conclave: Tech Transformation',
    description: 'Exploring the intersection of cloud computing, blockchain, and real-time cost management in the modern enterprise.',
    date: '2025-06-10T10:00:00',
    time: '10:00 AM - 04:00 PM',
    venue: 'Grand Hyatt, Kochi',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200',
    type: 'forthcoming',
    category: 'Conclave'
  },
  {
    id: 'event-3',
    title: 'Strategic Budgetary Analysis 2024 Post-Session',
    description: 'A detailed walkthrough of the union budget with a specific focus on industrial cost impacts and corporate taxation shifts.',
    date: '2024-02-10T10:00:00',
    time: '10:00 AM - 01:00 PM',
    venue: 'India Habitat Centre, Delhi',
    image: 'https://images.unsplash.com/photo-1585933334413-581335b7194f?auto=format&fit=crop&q=80&w=1200',
    type: 'past',
    category: 'Technical Session'
  },
  {
    id: 'event-4',
    title: 'Professional Ethics & Governance Conclave',
    description: 'Exploring the role of CMAs in ensuring ethical corporate governance and transparent fiscal reporting in the digital age.',
    date: '2023-11-05T09:00:00',
    time: '09:00 AM - 04:00 PM',
    venue: 'Convention Centre, Hyderabad',
    image: 'https://images.unsplash.com/photo-1589308454676-464a438740f9?auto=format&fit=crop&q=80&w=1200',
    type: 'past',
    category: 'Conclave'
  },
  {
    id: 'event-6',
    title: 'Manufacturing Excellence & Supply Chain Costing',
    description: 'A deep dive into Lean Six Sigma applications for CMA practitioners in the heavy engineering sector.',
    date: '2023-08-12T09:30:00',
    time: '09:30 AM - 05:00 PM',
    venue: 'J.W. Marriott, Pune',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    type: 'past',
    category: 'Seminar'
  },
  {
    id: 'event-7',
    title: 'Sustainability Reporting: The CMA Mandate',
    description: 'How cost accountants are leading the charge in Carbon Credit accounting and Environmental P&L reporting.',
    date: '2023-05-20T11:00:00',
    time: '11:00 AM - 02:00 PM',
    venue: 'ITC Gardenia, Bangalore',
    image: 'https://images.unsplash.com/photo-1597044003274-42ccad51451d?auto=format&fit=crop&q=80&w=1200',
    type: 'past',
    category: 'Workshop'
  }
];

export const PHOTOS: GalleryItem[] = [
  {
    id: 'p1',
    title: 'Inauguration of National Summit 2024',
    date: 'Oct 15, 2024',
    category: 'Summits',
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200',
    description: 'Shri Rajesh Kumar leading the lighting ceremony at the New Delhi Conclave.'
  },
  {
    id: 'p2',
    title: 'Roundtable on Fiscal Reform',
    date: 'Sep 22, 2024',
    category: 'Summits',
    thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    description: 'Strategic discussion with industry leaders on the 2025 budgetary proposals.'
  },
  {
    id: 'p3',
    title: 'Regional Chapter Leadership Meet',
    date: 'Aug 10, 2024',
    category: 'Regional',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    description: 'Chapter chairpersons from 12 states gathering in Hyderabad.'
  },
  {
    id: 'p4',
    title: 'AICMAA New Headquarters Unveiling',
    date: 'Jul 05, 2024',
    category: 'Institutional',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'The state-of-the-art policy hub in central New Delhi.'
  },
  {
    id: 'p5',
    title: 'CMA Day Celebrations',
    date: 'May 28, 2024',
    category: 'Institutional',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200',
    description: 'Gala dinner recognizing outstanding achievements in management accounting.'
  },
  {
    id: 'p6',
    title: 'Industrial Visit: Smart Manufacturing Hub',
    date: 'Apr 12, 2024',
    category: 'Regional',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    description: 'Members exploring IIoT integration in heavy engineering.'
  }
];

export const VIDEOS: GalleryItem[] = [
  {
    id: 'v1',
    title: 'Keynote: India\'s Path to $10 Trillion Economy',
    date: 'Oct 16, 2024',
    category: 'Keynotes',
    thumbnail: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'A visionary address by the Chairman on AICMAA\'s strategic role in national growth.'
  },
  {
    id: 'v2',
    title: 'Panel: ESG Standards in the Manufacturing Sector',
    date: 'Sep 05, 2024',
    category: 'Technical',
    thumbnail: 'https://images.unsplash.com/photo-1540575861501-7ad0582373f1?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Expert debate on the transition to net-zero accounting frameworks.'
  },
  {
    id: 'v3',
    title: 'Workshop: Advanced Cost Audit Methodologies',
    date: 'Aug 20, 2024',
    category: 'Technical',
    thumbnail: 'https://images.unsplash.com/photo-1454165833767-6226cead5b67?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Practical session on Rule 4 compliance and CARO reporting.'
  },
  {
    id: 'v4',
    title: 'Interview: The Future of Digital CFOs',
    date: 'Jul 12, 2024',
    category: 'Interviews',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Discussing the shift from transactional to strategic leadership.'
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'N-2024-001',
    title: 'Advisory on Mandatory Cost Audit Reporting for SEZ Units',
    description: 'Official clarification regarding the applicability of Rule 4 of the Companies (Cost Records and Audit) Rules, 2014 for Special Economic Zones.',
    date: '2024-10-22',
    category: 'Circular',
    pdfUrl: '#',
    fileSize: '1.2 MB',
    isImportant: true
  },
  {
    id: 'N-2024-002',
    title: 'Pre-Budget 2025: Call for Member Representations',
    description: 'Invitation for technical inputs and sectoral recommendations to be submitted to the Ministry of Finance for the upcoming Union Budget.',
    date: '2024-10-18',
    category: 'Government',
    pdfUrl: '#',
    fileSize: '850 KB'
  },
  {
    id: 'N-2024-003',
    title: 'Updated Guidelines for Professional Indemnity Insurance',
    description: 'Revised minimum coverage requirements and empanelled providers for CMA practitioners effective from Q1 2025.',
    date: '2024-10-12',
    category: 'Professional',
    pdfUrl: '#',
    fileSize: '2.4 MB'
  },
  {
    id: 'N-2024-004',
    title: 'High Court Summary: Para-Audit Parity Judgement',
    description: 'Strategic analysis of the recent High Court ruling reinforcing the role of CMAs in statutory panels for state-owned enterprises.',
    date: '2024-10-05',
    category: 'Legal',
    pdfUrl: '#',
    fileSize: '3.1 MB',
    isImportant: true
  },
  {
    id: 'N-2024-005',
    title: 'Notification: Renewal of Annual Membership Subscriptions 2025',
    description: 'Timeline and fee schedule for the upcoming fiscal year membership renewal cycle. Early bird incentives detailed within.',
    date: '2024-09-30',
    category: 'Circular',
    pdfUrl: '#',
    fileSize: '420 KB'
  }
];

export interface ResourceItem {
  title: string;
  date?: string;
  duration?: string;
}

export interface ResourceSubTab {
  id: string;
  label: string;
  items: ResourceItem[];
}

export interface ResourceTab {
  id: string;
  label: string;
  items?: ResourceItem[];
  subTabs?: ResourceSubTab[];
}

export const RESOURCE_TABS: ResourceTab[] = [
  {
    id: 'representation',
    label: 'Representation',
    subTabs: [
      {
        id: 'icai',
        label: 'Institute of Cost Accountants of India',
        items: [
          { title: 'Joint Memorandum on Cost Audit Effectiveness', date: 'Oct 15, 2024' },
          { title: 'Election Observer Nomination: Regional Councils', date: 'Sep 30, 2024' },
          { title: 'Professional Ethics & Standards: Board Update', date: 'Aug 22, 2024' }
        ]
      },
      {
        id: 'govt',
        label: 'Government Ministry Other Authorities',
        items: [
          { title: 'MCA: Representations on CARO 2024 Amendments', date: 'Oct 21, 2024' },
          { title: 'MoF: Pre-Budget 2025 Strategic Input Session', date: 'Oct 12, 2024' },
          { title: 'GST Council: Proposal for mandatory Cost Certification', date: 'Sep 18, 2024' }
        ]
      },
      {
        id: 'courts',
        label: 'Court Cases',
        items: [
          { title: 'High Court Ruling on CMA vs CA parity in Audit Panels', date: 'Oct 05, 2024' },
          { title: 'Supreme Court Representation: Professional Indemnity', date: 'Aug 14, 2024' },
          { title: 'Tribunal Summary: Cost Benefit Analysis precedents', date: 'Jul 28, 2024' }
        ]
      }
    ]
  },
  {
    id: 'events',
    label: 'Forthcoming Events',
    items: [
      { title: 'National Cost Summit 2024 - Mumbai', date: 'Nov 15-17, 2024' },
      { title: 'Webinar: Generative AI in Financial Reporting', date: 'Oct 28, 2024' },
      { title: 'Chapter Meet: South Zone Regional Conference', date: 'Dec 05, 2024' }
    ]
  },
  {
    id: 'videos',
    label: 'Recorded Videos',
    items: [
      { title: 'Keynote: The Future of ESG in Indian Manufacturing', duration: '45:20' },
      { title: 'Workshop: Advanced Cost Audit Techniques', duration: '1:12:00' },
      { title: 'Panel Discussion: Professional Ethics in Digital Era', duration: '58:15' }
    ]
  },
  {
    id: 'circulars',
    label: 'Circular & Notice',
    items: [
      { title: 'Notice: Annual General Meeting 2024 Registration', date: 'Oct 01, 2024' },
      { title: 'Circular: Revised Membership Fee Structure 2025', date: 'Sep 20, 2024' },
      { title: 'Notification: New Compliance Guidelines for Practitioners', date: 'Aug 30, 2024' }
    ]
  },
  {
    id: 'cma-news',
    label: 'Latest CMA News',
    items: [
      { title: 'AICMAA signs MoU with Global Institute of Management', date: 'Oct 22, 2024' },
      { title: 'Record number of Cost Accountants hired by Tech Giants', date: 'Oct 18, 2024' },
      { title: 'New Amendment in Cost Audit Rules: What you need to know', date: 'Oct 10, 2024' }
    ]
  }
];
