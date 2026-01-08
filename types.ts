
export interface PolicyIssue {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AICMAAEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO string for countdown
  time: string;
  venue: string;
  image: string;
  type: 'forthcoming' | 'past';
  category: string;
}

export interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Circular' | 'Government' | 'Professional' | 'Legal';
  pdfUrl: string;
  fileSize: string;
  isImportant?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  date: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Only for videos
  description?: string;
}
