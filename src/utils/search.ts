export type SearchResultType = 'project' | 'blog' | 'page';

export interface SearchResult {
  title: string;
  href: string;
  description?: string;
  type: SearchResultType;
  keywords?: string[];
}

interface SearchableContent {
  projects: SearchResult[];
  pages: SearchResult[];
  blog: SearchResult[];
}

const searchableContent: SearchableContent = {
  projects: [
    {
      title: 'Nasher Miles',
      href: '/shopify#nashermiles',
      description: 'E-commerce website built with Shopify',
      type: 'project',
      keywords: ['shopify', 'e-commerce', 'retail', 'luggage'],
    },
    {
      title: 'United Colors of Benetton',
      href: '/shopify#benetton',
      description: 'Fashion e-commerce platform',
      type: 'project',
      keywords: ['shopify', 'e-commerce', 'fashion', 'retail'],
    },
    {
      title: 'Milton',
      href: '/shopify#milton',
      description: 'Kitchenware e-commerce store',
      type: 'project',
      keywords: ['shopify', 'e-commerce', 'kitchenware'],
    }
  ],
  pages: [
    {
      title: 'About',
      href: '/about',
      description: 'Learn about my experience and skills',
      type: 'page',
      keywords: ['about', 'experience', 'skills', 'background'],
    },
    {
      title: 'Contact',
      href: '/contact',
      description: 'Get in touch with me',
      type: 'page',
      keywords: ['contact', 'email', 'social'],
    },
    {
      title: 'Shopify Projects',
      href: '/shopify',
      description: 'View my Shopify development work',
      type: 'page',
      keywords: ['shopify', 'projects', 'portfolio'],
    }
  ],
  blog: []
};

export const searchContent = (query: string): SearchResult[] => {
  if (!query) return [];
  
  const normalizedQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];
  
  // Search through all content types
  Object.values(searchableContent).forEach(contentArray => {
    contentArray.forEach((item: SearchResult) => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = item.description?.toLowerCase().includes(normalizedQuery);
      const keywordMatch = item.keywords?.some((keyword: string) => 
        keyword.toLowerCase().includes(normalizedQuery)
      );
      
      if (titleMatch || descriptionMatch || keywordMatch) {
        results.push(item);
      }
    });
  });
  
  // Sort results by relevance (title matches first, then description, then keywords)
  return results.sort((a, b) => {
    const aTitle = a.title.toLowerCase().includes(normalizedQuery) ? 2 : 0;
    const bTitle = b.title.toLowerCase().includes(normalizedQuery) ? 2 : 0;
    const aDesc = a.description?.toLowerCase().includes(normalizedQuery) ? 1 : 0;
    const bDesc = b.description?.toLowerCase().includes(normalizedQuery) ? 1 : 0;
    return (bTitle + bDesc) - (aTitle + aDesc);
  });
}; 