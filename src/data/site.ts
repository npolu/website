// =============================================================================
//  EDIT YOUR CV / PROFILE CONTENT HERE
// =============================================================================
//  This is the ONE file you edit to update everything on the home page:
//  your name, summary, experience, skills, and education.
//  (Blog posts are separate — those are markdown files in src/content/blog/)
// =============================================================================

export const site = {
  name: 'Nagendra Polu',
  role: 'Lab Systems Consultant & CSV Specialist',
  tagline:
    'Building, validating, and supporting enterprise lab informatics platforms across regulated biopharma environments.',
  location: 'New York, USA',
  email: 'polu.nagendra@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nagendra-p-b1102b11',
  github: 'https://github.com/npolu',
  // Put your CV PDF in the /public folder and update the filename below.
  cvFile: '/cv.pdf',
};

export const about = {
  paragraphs: [
    'I am a Lab Systems Consultant and Senior Technical Analyst with over 12 years in biopharma, specializing in Computer System Validation (CSV) and the build, deployment, and support of enterprise lab informatics platforms — SDMS, CDS, and LIMS — in regulated GxP environments.',
    'My work spans the full system lifecycle: infrastructure readiness and environment build, network and security enablement, identity and access management, and steady-state operational support. I have supported enterprise deployments reaching 1,000+ instruments and 1,300+ users across global sites, on platforms including Waters Empower, Thermo Fisher Chromeleon, Agilent OpenLab / ECM, and LabWare LIMS.',
    'I write here about lab informatics, computer system validation, and data integrity — practical notes for others working to keep regulated laboratory systems compliant and reliable.',
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: 'Associate Manager — Lab Systems Consultant',
    company: 'Regeneron',
    period: 'Jan 2025 — Present',
    location: 'New York, USA',
    highlights: [
      'Lead qualification of QC lab systems across IPOS sites — system impact assessments, 21 CFR Part 11 and EU Annex 11 evaluations, and data integrity assessments.',
      'Upgraded 10+ QC lab systems (PA800, Rudolph, PharmaSpec, iCE3, PCR 7500, MicroSeq, FTIR, LabChip) to Windows 10 with compatible application software.',
      'Author and review CQV documentation (SRS, equipment qualification, configuration specs, IQ/OQ/PQ) in EDMS and ValGenesis with full traceability.',
      'Apply root-cause analysis and CAPA processes to maintain data integrity and regulatory compliance.',
    ],
  },
  {
    role: 'Lead QC Laboratory Systems Engineer',
    company: 'Amneal Pharmaceuticals',
    period: 'Nov 2024 — Dec 2024',
    location: 'New Jersey, USA',
    highlights: [
      'Built a master image (drivers, DCOM, network bridging via Acronis Snap Deploy) and configured 50+ LAC/E systems for Empower 3 deployment.',
      'Configured HPLC and GC instruments from Agilent, Waters, and Beckman CE (Sciex PA800+).',
      'Integrated 30+ laboratory instruments with Caliber LIMS via file-, serial-, and CDS-based interfaces to automate data capture.',
    ],
  },
  {
    role: 'Senior Solution Lifecycle Manager',
    company: 'Roche',
    period: 'Aug 2020 — Apr 2024',
    location: 'Kuala Lumpur, Malaysia',
    highlights: [
      'Helped design and deploy an enterprise Empower 3 FR5 global quality system supporting 1,000+ instruments and 1,300+ users across multiple geographies.',
      'Served as system administrator for Empower 3 FR2/FR5; led new-site implementations and FR2→FR5 upgrades, plus DR planning and yearly periodic backup/restore and access-control activities.',
      'Led a 6-member squad supporting 60+ manufacturing QC lab systems (Chromeleon, ChemStation, WinKQCL, SoloVPE, and more); migrated QC lab access management to SailPoint IAM.',
      'As system owner for TetraLake, onboarded Empower / Chromeleon / ChemStation data into an AWS cloud repository and built CI/CD pipelines with GitLab and Terraform.',
    ],
  },
  {
    role: 'IT Service Specialist',
    company: 'GlaxoSmithKline',
    period: 'Feb 2011 — Mar 2020',
    location: 'Kuala Lumpur, Malaysia',
    highlights: [
      'Core member of the enterprise LabWare LIMS team — upgraded LIMS to v7, authored validation documents, and executed test plans in HP-ALM.',
      'Led a 14-member team supporting 150+ R&D software components across incident, problem, change, and release management.',
      'Standardized service governance to cut costs by £100K annually and reduce ticket volume by 30%; automated deployments to reduce release cycle time by 80%.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'CenturyLink (formerly Qwest)',
    period: 'May 2010 — Jan 2011',
    location: 'Bengaluru, India',
    highlights: [
      'Built a Java-based reporting web portal using the Cognos SDK and led a proof of concept to migrate Actuate reports to Cognos.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Wipro Technologies',
    period: 'Jul 2006 — Nov 2009',
    location: 'Bengaluru, India',
    highlights: [
      'Provided Java/J2EE web application support and JSP development during enterprise migration to the EDS environment.',
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Lab Informatics Platforms',
    items: [
      'Waters Empower CDS',
      'Thermo Fisher Chromeleon',
      'Agilent OpenLab & ECM',
      'LabWare LIMS',
      'Waters SDMS / ELN',
    ],
  },
  {
    group: 'Validation & Compliance',
    items: [
      'CSV / CQV',
      'GxP & GAMP 5',
      'FDA 21 CFR Part 11',
      'EU Annex 11',
      'Data Integrity (ALCOA+)',
      'ValGenesis & HP-ALM',
      'CAPA & audit support',
    ],
  },
  {
    group: 'Infrastructure & Networking',
    items: [
      'Windows Server administration',
      'VM provisioning & Citrix',
      'Firewall & port/protocol mapping',
      'TLS/SSL & DCOM',
      'DEV/TEST/PROD readiness',
    ],
  },
  {
    group: 'Identity, Access & Security',
    items: [
      'Active Directory',
      'Service accounts & NTFS permissions',
      'Least-privilege access controls',
      'SailPoint IAM',
      'BeyondTrust Bomgar',
    ],
  },
  {
    group: 'Cloud & DevOps',
    items: [
      'AWS (EC2, S3, RDS, Lambda)',
      'CloudFormation & VPC',
      'Docker',
      'GitLab CI/CD',
      'Terraform',
    ],
  },
  {
    group: 'Databases & Automation',
    items: [
      'MS SQL Server',
      'Oracle PL/SQL',
      'SQL audit-trail scripting',
      'Python & PowerShell',
      'Java',
    ],
  },
];

export type Education = {
  credential: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    credential: 'B.Tech in Information Technology',
    institution: 'Acharya Nagarjuna University',
    period: '2004',
  },
];

export const certifications: string[] = [
  'AWS Certified Solutions Architect — Associate',
  'AWS Certified Cloud Practitioner',
  'Waters Empower 3 System Administration',
  'ITIL Foundation v4 (and v3)',
  'Agile Scrum Master (ASM)',
  'Certified SAFe 5 Agilist',
  'LabWare LIMS Administration 1 & ELN Configuration',
];
