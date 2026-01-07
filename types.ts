
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
