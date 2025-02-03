export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding SEO in 2024",
    excerpt: "A comprehensive guide to modern SEO practices and strategies for better rankings.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    date: "2024-03-15",
    author: "John Doe",
    imageUrl: "/images/blogs/1.webp",
    category: "SEO"
  },
  {
    id: "2",
    title: "The Rise of AI in Digital Marketing",
    excerpt: "Exploring how artificial intelligence is reshaping the digital marketing landscape.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
    date: "2024-03-12",
    author: "Jane Smith",
    imageUrl: "/images/blogs/2.webp",
    category: "Digital Marketing"
  },
  {
    id: "3",
    title: "Mobile-First Indexing: What You Need to Know",
    excerpt: "Essential tips for optimizing your website for mobile-first indexing.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
    date: "2024-03-10",
    author: "Mike Johnson",
    imageUrl: "/images/blogs/3.webp",
    category: "SEO"
  },
  {
    id: "4",
    title: "Content Marketing Strategies for 2024",
    excerpt: "Effective content marketing approaches to boost your online presence.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
    date: "2024-03-08",
    author: "Sarah Wilson",
    imageUrl: "/images/blogs/4.webp",
    category: "Content Marketing"
  },
  {
    id: "5",
    title: "Local SEO Tips for Small Businesses",
    excerpt: "How to improve your local search rankings and attract more customers.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
    date: "2024-03-05",
    author: "David Brown",
    imageUrl: "/images/blogs/5.webp",
    category: "Local SEO"
  },
  {
    id: "6",
    title: "Social Media Marketing Trends",
    excerpt: "Latest trends and strategies in social media marketing for better engagement.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`,
    date: "2024-03-03",
    author: "Emily Davis",
    imageUrl: "/images/blogs/6.webp",
    category: "Social Media"
  },
  {
    id: "7",
    title: "E-commerce SEO Optimization Guide",
    excerpt: "Essential strategies to improve your online store's search visibility and drive more sales.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    date: "2024-03-01",
    author: "Alex Thompson",
    imageUrl: "/images/blogs/7.webp",
    category: "E-commerce"
  },
  {
    id: "8",
    title: "Voice Search Optimization in 2024",
    excerpt: "How to optimize your content for voice search and stay ahead of the competition.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    date: "2024-02-28",
    author: "Rachel Green",
    imageUrl: "/images/blogs/8.webp",
    category: "SEO"
  },
  {
    id: "9",
    title: "The Complete Guide to Technical SEO",
    excerpt: "Understanding and implementing technical SEO best practices for better website performance.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    date: "2024-02-25",
    author: "Michael Chen",
    imageUrl: "/images/blogs/9.webp",
    category: "Technical SEO"
  },
  {
    id: "10",
    title: "Content Creation Tools for Digital Marketers",
    excerpt: "A curated list of the best tools to enhance your content creation workflow.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    date: "2024-02-22",
    author: "Sophie Martinez",
    imageUrl: "/images/blogs/10.webp",
    category: "Content Marketing"
  },
];