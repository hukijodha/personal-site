const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Languages', 'Backend Development'],
  },
  {
    title: 'Spring',
    competency: 5,
    category: ['Frameworks', 'Backend Development'],
  },
  {
    title: 'Hibernate',
    competency: 5,
    category: ['Frameworks', 'Backend Development'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['DevOps', 'Cloud'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'APIs'],
  },
  {
    title: 'SIP and SS7 Protocols',
    competency: 4,
    category: ['Telecommunications'],
  },
  {
    title: 'Oracle',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Cassandra',
    competency: 3,
    category: ['Databases', 'NoSQL'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Databases', 'Cache'],
  },
  {
    title: 'Kafka',
    competency: 3,
    category: ['Data Engineering', 'Event Streaming'],
  },
  {
    title: 'Microservices Architecture',
    competency: 4,
    category: ['Architecture', 'Backend Development'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Frontend Development', 'Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Frontend Development'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['DevOps', 'Containerization'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Version Control', 'Tools'],
  },
  {
    title: 'Jenkins',
    competency: 3,
    category: ['CI/CD', 'DevOps'],
  },
  {
    title: 'Elasticsearch',
    competency: 3,
    category: ['Search', 'Databases'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases', 'SQL'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#515dd4', // Backend Development
  '#6968b3', // Languages
  '#37b1f5', // Cloud
  '#40494e', // Web Development
  '#64cb7b', // DevOps
  '#cc7b94', // Databases
  '#747fff', // APIs
  '#e47272', // NoSQL
  '#d75858', // Telecommunications
  '#3896e2', // Frontend Development
  '#c3423f', // Architecture
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
