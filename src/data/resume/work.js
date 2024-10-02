/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Akamai Technologies',
    position: 'Senior Software Engineer 2',
    url: 'https://akamai.com',
    startDate: '2024-03-01',
    summary: `At Akamai Technologies, I am part of a team building an observability platform. 
    Additionally, I have written multiple APIs for Linode cloud, which is owned by Akamai.`,
    highlights: [
      'Building an observability platform to enhance system monitoring and reliability.',
      'Developed multiple cloud-based APIs for Akamai-owned Linode.',
    ],
  },
  {
    name: 'OLX',
    position: 'Senior Software Engineer 2',
    url: 'https://www.olxautos.com',
    startDate: '2022-03-01',
    endDate: '2024-03-01',
    summary: `At OLX Autos, I worked on CRM-related projects aimed at processing incoming car leads efficiently
    through inspections and other administrative tasks. I led several core features for their CRM system
    including self-inspection services and car financing options.`,
    highlights: [
      'Developed COTF (CRM of the future), improving C2B and B2C finance flows for OLX Autos.',
      'Integrated admin apps for car inspections, creation, updates, and location management.',
      'Implemented self-inspection, retail inspection, pickup/drop services, and booking systems.',
      'Synchronized Salesforce CRM operations with frontend websites.',
      'Worked on pricing API migration from SAP to ChargeBee',
      'Worked on enhancing the advertisement packages and billing',
      'Built an automated pricing model to estimate car offer prices and handled third-party lead conversion.',
    ],
  },
  {
    name: 'Ericsson',
    position: 'Senior Software Engineer',
    url: 'https://ericsson.com',
    startDate: '2015-01-01',
    endDate: '2022-01-01',
    summary: `At Ericsson, I contributed to various telecommunications projects, implementing services like DND (Do Not Disturb), 
    call completion, and traffic screening systems. I worked with multiple telecommunication protocols like SIP, RO, and capv1.`,
    highlights: [
      'Developed Zain DND, a service that screens incoming voice traffic based on user subscriptions.',
      'Built and maintained RESTful web services for the Zain DND Provisioning project.',
      'Enhanced call completion logic for STC-CCA to manage call-forwarding and call-back options.',
      'Created screening services based on whitelists and blacklists in the STC-ITS project.',
      'Developed call management systems using SIP protocol for STC-CMS on IMS.',
      'Contributed to TIM Italy’s call management system on capv1 and cs1plus protocols.',
      'Developed a pilot packet collector for Verizon that processed 14K TPS UDP packets in a microservice architecture.',
    ],
  },
];

export default work;
