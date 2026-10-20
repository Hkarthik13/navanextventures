import type { BusinessDivision, ShowcaseProject, ApproachPrinciple, WhyNavanextPoint } from '../types';

/**
 * navanextventures — CENTRAL CONFIGURATION
 * 
 * Edit this file to update parent brand information, business division names,
 * descriptions, services, images, and contact placeholders without touching components.
 */

export const siteConfig = {
  brand: {
    name: 'navanextventures',
    fullName: 'navanextventures',
    tagline: 'One Group. Multiple Possibilities.',
    heroSubtitle: 'Bringing expertise across construction, technology, real estate, and emerging industries together under one trusted vision.',
    establishedPlaceholder: 'Consolidated Corporate Portfolio',
    primaryCtaText: 'Explore Our Businesses',
    secondaryCtaText: 'Start a Conversation',
  },

  intro: {
    badge: 'Group Structure & Vision',
    heading: 'A Unified Vision. Specialized Expertise.',
    bodyText: 'Navanext brings specialized businesses together through a shared commitment to quality, thoughtful execution, and lasting relationships. Operating as a unified parent organization, the group enables each enterprise to focus deeply on its domain while drawing strength from collective governance, financial stability, and collaborative synergy.',
    secondaryParagraph: 'Whether delivering physical infrastructure, deploying enterprise software, or developing long-term real estate assets, our divisions operate with shared standards of integrity, transparency, and enduring value.',
    ctaText: 'Discover Navanext',
    image: '/images/group_hero.jpg',
  },

  contactInfo: {
    headquarters: '[Corporate Headquarters Address — Placeholder]',
    cityCountry: '[City, Region, Country]',
    email: 'contact@navanext.example.com',
    emailNote: 'For demonstration only — update with verified corporate inbox',
    phone: '[+1 (000) 000-0000 Placeholder]',
    businessHours: 'Monday – Friday: 09:00 – 18:00',
    disclaimer: 'This website is an interactive prototype for company presentation. Contact submissions are recorded in demonstration mode.',
  },

  divisions: [
    {
      id: 'builders',
      slug: 'builders',
      divisionNumber: '01',
      name: 'Navanext Builders',
      industry: 'Construction & Infrastructure',
      tagline: 'Structural precision, thoughtful planning, and reliable execution.',
      shortDescription: 'Building spaces and infrastructure with a focus on thoughtful planning, quality, and execution.',
      fullOverview: 'Navanext Builders delivers construction, civil works, and infrastructure solutions with rigorous engineering oversight. Guided by proactive planning and safety-first management, we turn complex physical blueprints into durable, functional realities that serve communities and enterprises for decades.',
      valueProposition: 'Disciplined project management, uncompromising structural quality, and clear timeline transparency from foundation to handover.',
      heroImage: '/images/builders_hero.jpg',
      accentColor: '#101C2C',
      isPlaceholder: false,
      services: [
        {
          title: 'Commercial & Institutional Construction',
          description: 'Turnkey building solutions for corporate offices, commercial campuses, and institutional facilities.',
          scope: ['Site preparation & earthworks', 'Structural concrete & steel framing', 'Interior fit-outs & MEP integration']
        },
        {
          title: 'Civil & Transport Infrastructure',
          description: 'Essential municipal and private civil engineering projects built to withstand demanding conditions.',
          scope: ['Access roads & paved networks', 'Stormwater & drainage systems', 'Utility corridor installations']
        },
        {
          title: 'Industrial Facilities & Warehousing',
          description: 'Purpose-engineered structures optimized for logistics, light manufacturing, and storage operations.',
          scope: ['High-bay warehouse spaces', 'Heavy-load flooring slabs', 'Loading docks & distribution hubs']
        },
        {
          title: 'Construction Management & QA',
          description: 'Independent oversight ensuring adherence to technical specifications, safety protocols, and budgetary limits.',
          scope: ['Contractor coordination', 'Independent QA/QC audits', 'Safety & compliance governance']
        }
      ],
      approachSteps: [
        {
          number: '01',
          title: 'Site Analysis & Feasibility',
          description: 'Comprehensive geotechnical assessments, site constraints evaluation, and constructability reviews.'
        },
        {
          number: '02',
          title: 'Engineering & Phasing',
          description: 'Detailed sequencing of structural phases, procurement lead times, and resource scheduling.'
        },
        {
          number: '03',
          title: 'Rigorous On-Site Execution',
          description: 'Daily supervisory controls, certified trade execution, and milestone verification.'
        },
        {
          number: '04',
          title: 'Handover & Commissioning',
          description: 'Testing of all MEP systems, full documentation handover, and structured warranty support.'
        }
      ],
      illustrativeProjects: [
        {
          title: 'Metropolitan Commercial Center',
          category: 'Commercial Development',
          scope: 'Multi-story commercial complex with sustainable building envelope and integrated parking.',
          description: 'Illustrative architectural framework demonstrating structural steel layout and efficient circulation design.',
          image: '/images/builders_hero.jpg',
          statusBadge: 'Sample Framework'
        },
        {
          title: 'Regional Logistics & Distribution Depot',
          category: 'Industrial Infrastructure',
          scope: 'High-clearance warehouse facility designed for rapid distribution logistics.',
          description: 'Concept layout showcasing heavy-duty structural concrete flooring and high-volume loading docks.',
          image: '/images/builders_hero.jpg',
          statusBadge: 'Illustrative Concept'
        },
        {
          title: 'Civic Infrastructure Corridor',
          category: 'Civil Works',
          scope: 'Integrated arterial roadway and stormwater management network.',
          description: 'Prototype civil design focusing on long-term pavement durability and environmental drainage.',
          image: '/images/builders_hero.jpg',
          statusBadge: 'Sample Concept'
        }
      ]
    },
    {
      id: 'software-technologies',
      slug: 'software-technologies',
      divisionNumber: '02',
      name: 'Navanext Software Technologies',
      industry: 'Software & Technology',
      tagline: 'Practical digital engineering, scalable platforms, and modern enterprise systems.',
      shortDescription: 'Developing software and digital solutions designed around business needs and practical outcomes.',
      fullOverview: 'Navanext Software Technologies designs and builds reliable, maintainable software systems. We bridge commercial strategy with technical execution, creating custom enterprise applications, cloud infrastructures, and digital workflows that enable businesses to operate with speed and precision.',
      valueProposition: 'Architectural clarity, modern engineering standards, and software crafted for long-term operational resilience.',
      heroImage: '/images/software_hero.jpg',
      accentColor: '#172538',
      isPlaceholder: false,
      services: [
        {
          title: 'Custom Enterprise Software',
          description: 'Targeted web applications, internal tools, and workflow automation systems built for business needs.',
          scope: ['Core business management systems', 'Workflow automation & portals', 'Bespoke operational dashboards']
        },
        {
          title: 'Cloud Infrastructure & Architecture',
          description: 'Resilient cloud foundations designed for uptime, security, and controlled operational expense.',
          scope: ['Containerized microservices', 'CI/CD deployment pipelines', 'High-availability database setups']
        },
        {
          title: 'API Engineering & Systems Integration',
          description: 'Connecting disparate legacy systems, external vendor APIs, and internal services cleanly.',
          scope: ['RESTful & GraphQL interfaces', 'Data transformation pipelines', 'Secure authentication systems']
        },
        {
          title: 'Digital Product Design & Modern UI/UX',
          description: 'Intuitive, accessible, and high-performance interfaces tailored to operational users and customers.',
          scope: ['Component design systems', 'Accessibility (WCAG) compliance', 'Responsive multi-platform interfaces']
        }
      ],
      approachSteps: [
        {
          number: '01',
          title: 'Domain & System Discovery',
          description: 'Uncovering business workflows, system bottlenecks, and concrete technical criteria.'
        },
        {
          number: '02',
          title: 'Architecture & Prototype',
          description: 'Creating modular schemas, service boundaries, and clickable interface prototypes.'
        },
        {
          number: '03',
          title: 'Iterative Engineering & Testing',
          description: 'Writing documented, test-covered code with automated continuous integration builds.'
        },
        {
          number: '04',
          title: 'Deployment & Observability',
          description: 'Zero-downtime release strategies backed by real-time health telemetry and support.'
        }
      ],
      illustrativeProjects: [
        {
          title: 'Enterprise Operations & Supply Platform',
          category: 'Enterprise Software',
          scope: 'Unified web portal for multi-location inventory and dispatch tracking.',
          description: 'Interactive concept demonstrating multi-tenant permissions, real-time status feeds, and audit logs.',
          image: '/images/software_hero.jpg',
          statusBadge: 'Illustrative Concept'
        },
        {
          title: 'Telemetry & Infrastructure Monitoring Hub',
          category: 'Cloud Engineering',
          scope: 'Distributed telemetry dashboard tracking server load and incident alerts.',
          description: 'Sample interface design illustrating low-latency metric ingestion and alert workflows.',
          image: '/images/software_hero.jpg',
          statusBadge: 'Sample Concept'
        },
        {
          title: 'Client Collaboration & Asset Portal',
          category: 'Digital Products',
          scope: 'Secure web application for document exchange and project milestone tracking.',
          description: 'Demonstration layout focusing on clean typography, responsive navigation, and document previewing.',
          image: '/images/software_hero.jpg',
          statusBadge: 'Sample Framework'
        }
      ]
    },
    {
      id: 'real-estate',
      slug: 'real-estate',
      divisionNumber: '03',
      name: 'Navanext Real Estate',
      industry: 'Real Estate & Property',
      tagline: 'Strategic property development, prime locations, and thoughtful asset curation.',
      shortDescription: 'Connecting property opportunities with practical real estate solutions and informed decision-making.',
      fullOverview: 'Navanext Real Estate identifies, plans, and stewards property assets with an emphasis on long-term value, prime livability, and commercial utility. We guide land acquisition, asset repositioning, and mixed-use developments with meticulous regulatory compliance and market awareness.',
      valueProposition: 'Disciplined location selection, transparent transaction support, and property developments designed for enduring capital appreciation.',
      heroImage: '/images/realestate_hero.jpg',
      accentColor: '#1E3048',
      isPlaceholder: false,
      services: [
        {
          title: 'Property Development & Asset Stewardship',
          description: 'End-to-end development oversight for master-planned communities, corporate suites, and retail centers.',
          scope: ['Master planning & zoning navigation', 'Architectural coordination', 'Capital structuring & project delivery']
        },
        {
          title: 'Strategic Site & Land Acquisition',
          description: 'Data-informed land sourcing and title verification for commercial and residential development.',
          scope: ['Title due diligence & encumbrance checks', 'Zoning & municipal approvals', 'Demographic growth forecasting']
        },
        {
          title: 'Commercial Leasing & Asset Advisory',
          description: 'Advisory services matching corporate tenants with functional office and retail facilities.',
          scope: ['Tenant representation', 'Lease structuring & renewals', 'Space utilization optimization']
        },
        {
          title: 'Property Repositioning & Upgrades',
          description: 'Transforming underutilized physical assets to meet modern efficiency and lifestyle expectations.',
          scope: ['Façade & common-area renovations', 'Energy-efficiency retrofits', 'Asset re-tenanting strategy']
        }
      ],
      approachSteps: [
        {
          number: '01',
          title: 'Location & Market Due Diligence',
          description: 'Rigorous legal title audits, municipal zoning analysis, and surrounding infrastructure roadmaps.'
        },
        {
          number: '02',
          title: 'Concept & Spatial Planning',
          description: 'Balancing density, natural lighting, green spaces, and vehicular/pedestrian movement.'
        },
        {
          number: '03',
          title: 'Development Coordination',
          description: 'Working hand-in-hand with Navanext Builders and specialized partners for quality craftsmanship.'
        },
        {
          number: '04',
          title: 'Asset Management & Stewardship',
          description: 'Long-term operational care, tenant satisfaction, and property value preservation.'
        }
      ],
      illustrativeProjects: [
        {
          title: 'The Parkside Corporate Campus',
          category: 'Commercial Development',
          scope: 'Class-A suburban office enclave with green courtyards and dedicated conference facilities.',
          description: 'Sample master plan model balancing flexible floor plates with pedestrian connectivity.',
          image: '/images/realestate_hero.jpg',
          statusBadge: 'Sample Concept'
        },
        {
          title: 'Horizon Enclave Residences',
          category: 'Residential Community',
          scope: 'Master-planned boutique residential neighborhood featuring contemporary private residences.',
          description: 'Architectural rendering showcasing thoughtful natural lighting, wide access avenues, and native landscaping.',
          image: '/images/realestate_hero.jpg',
          statusBadge: 'Illustrative Concept'
        },
        {
          title: 'Midtown Commercial Pavilion',
          category: 'Mixed-Use Retail & Office',
          scope: 'Urban infill project integrating ground-level retail amenities with boutique professional suites.',
          description: 'Illustrative spatial configuration demonstrating street-level vibrancy and private office access.',
          image: '/images/realestate_hero.jpg',
          statusBadge: 'Sample Framework'
        }
      ]
    },
    {
      id: 'fourth-division',
      slug: 'fourth-division',
      divisionNumber: '04',
      name: 'Navanext Solutions & Advisory',
      industry: 'Enterprise Solutions & Emerging Domains',
      tagline: 'Strategic advisory, cross-domain coordination, and emerging business enablement.',
      shortDescription: 'Discover specialized services from another business within navanextventures.',
      fullOverview: 'This division represents the customizable fourth business entity within navanextventures. Whether configured for Capital Advisory, Renewable Energy, Industrial Supply, or Logistics, this division shares the parent company\'s commitment to governance, analytical rigor, and client partnership.',
      valueProposition: 'Configurable domain template designed to integrate seamlessly once the fourth enterprise vertical is finalized.',
      heroImage: '/images/advisory_hero.jpg',
      accentColor: '#253346',
      isPlaceholder: true,
      placeholderNotice: 'Configurable Domain Placeholder — Easily update this division name, industry, services, and visuals in src/data/siteConfig.ts.',
      services: [
        {
          title: 'Strategic Corporate Advisory',
          description: 'Structuring cross-functional initiatives and operational partnerships across business units.',
          scope: ['Feasibility evaluations', 'Partner & supplier qualification', 'Strategic planning sessions']
        },
        {
          title: 'Operational Enablement & Procurement',
          description: 'Sourcing and supply governance tailored to heavy industry and technology requirements.',
          scope: ['Vendor contract oversight', 'Quality assurance benchmarking', 'Logistics coordination']
        },
        {
          title: 'Cross-Domain Synergy Coordination',
          description: 'Harnessing construction, software, and property resources into turnkey package offerings.',
          scope: ['Inter-division alignment', 'Consolidated reporting', 'Single-point executive governance']
        },
        {
          title: 'Emerging Sector Incubation',
          description: 'Framework for evaluating and integrating new industry opportunities under the Navanext banner.',
          scope: ['Market readiness assessment', 'Regulatory landscape mapping', 'Proof-of-concept design']
        }
      ],
      approachSteps: [
        {
          number: '01',
          title: 'Requirements Alignment',
          description: 'Defining key milestones and cross-domain requirements for specialized projects.'
        },
        {
          number: '02',
          title: 'Strategic Framework Formulation',
          description: 'Developing operational protocols, resource allocation, and accountability metrics.'
        },
        {
          number: '03',
          title: 'Structured Deployment',
          description: 'Overseeing rollout with transparent checkpoints and regular executive briefings.'
        },
        {
          number: '04',
          title: 'Continuous Review & Optimization',
          description: 'Refining processes and delivering measurable long-term business value.'
        }
      ],
      illustrativeProjects: [
        {
          title: 'Inter-Disciplinary Enterprise Framework',
          category: 'Other Businesses',
          scope: 'Unified cross-business operational integration model.',
          description: 'Sample operational blueprint demonstrating group coordination and governance standards.',
          image: '/images/advisory_hero.jpg',
          statusBadge: 'Configurable Concept'
        },
        {
          title: 'Sustainable Infrastructure Advisory Model',
          category: 'Other Businesses',
          scope: 'Strategic assessment matrix for environmental energy and sustainable materials.',
          description: 'Illustrative framework showcasing feasibility scoring and implementation roadmaps.',
          image: '/images/advisory_hero.jpg',
          statusBadge: 'Sample Concept'
        }
      ]
    }
  ] as BusinessDivision[],

  approachPrinciples: [
    {
      number: '01',
      title: 'Understand',
      summary: 'Understand the client’s needs, context, and objectives.',
      details: 'Every project begins with active listening and clear inquiry. We examine operational realities, commercial goals, and site or technical constraints before prescribing a course of action.'
    },
    {
      number: '02',
      title: 'Plan',
      summary: 'Define the scope, priorities, and appropriate approach.',
      details: 'Clarity eliminates surprises. We establish precise scopes of work, transparent milestones, realistic timelines, and clear allocation of responsibilities across stakeholders.'
    },
    {
      number: '03',
      title: 'Deliver',
      summary: 'Execute with clear communication and attention to detail.',
      details: 'Disciplined execution is our benchmark. We maintain regular progress reporting, open communication, and rigorous quality assurance at every phase of delivery.'
    },
    {
      number: '04',
      title: 'Improve',
      summary: 'Support long-term value through feedback and continuous improvement.',
      details: 'Handover is not the end of the relationship. We conduct post-delivery reviews, measure operational outcomes, and incorporate insights to build lasting value.'
    }
  ] as ApproachPrinciple[],

  whyNavanext: [
    {
      id: 'multi-industry',
      title: 'Specialized Expertise Across Domains',
      description: 'Each Navanext business operates with dedicated domain specialists who understand the nuances of their specific industry, from civil engineering to cloud architecture.'
    },
    {
      id: 'single-contact',
      title: 'Unified Corporate Accountability',
      description: 'Clients and partners gain access to a connected group with clear executive stewardship, eliminating fragmented communication and conflicting incentives.'
    },
    {
      id: 'structured-approach',
      title: 'Structured, Disciplined Execution',
      description: 'A uniform four-stage delivery methodology ensures consistent communication, clear milestone tracking, and rigorous quality controls across all divisions.'
    },
    {
      id: 'tailored-alignment',
      title: 'Aligned With Your Specific Needs',
      description: 'We do not push one-size-fits-all products. Solutions are scoped to match your exact commercial context, scale, and long-term operating objectives.'
    }
  ] as WhyNavanextPoint[],

  showcaseProjects: [
    {
      id: 'proj-01',
      title: 'Structural Steel & Glass Commercial Atrium',
      divisionId: 'builders',
      divisionName: 'Navanext Builders',
      category: 'Construction',
      shortDescription: 'Modern corporate atrium designed for seismic stability, natural daylighting, and thermal efficiency.',
      fullOverview: 'This sample structural concept illustrates the integration of high-tensile steel framing with custom acoustic and thermal glass paneling. Developed as an illustrative engineering model for modern corporate campus environments.',
      image: '/images/builders_hero.jpg',
      keyHighlights: ['Custom structural steel geometry', 'High-performance solar control glass', 'Illustrative engineering blueprint'],
      isConcept: true,
      locationOrDomain: 'Commercial Architecture Concept'
    },
    {
      id: 'proj-02',
      title: 'Distributed Multi-Tenant Cloud Architecture',
      divisionId: 'software-technologies',
      divisionName: 'Navanext Software Technologies',
      category: 'Technology',
      shortDescription: 'Scalable backend service architecture with automated failover and role-based access management.',
      fullOverview: 'A technical architecture model showing how Navanext Software Technologies approaches enterprise systems. Incorporates isolated tenant schemas, encrypted data pipelines, and sub-100ms API endpoints.',
      image: '/images/software_hero.jpg',
      keyHighlights: ['Automated container scaling', 'End-to-end data encryption', 'Illustrative technical architecture'],
      isConcept: true,
      locationOrDomain: 'Cloud Systems Concept'
    },
    {
      id: 'proj-03',
      title: 'The Terraces Contemporary Residential Enclave',
      divisionId: 'real-estate',
      divisionName: 'Navanext Real Estate',
      category: 'Real Estate',
      shortDescription: 'Master-planned boutique community emphasizing natural ventilation, private gardens, and timeless materials.',
      fullOverview: 'An illustrative master-planning study demonstrating how residential parcels can be positioned to maximize privacy, sunlight orientation, and green communal spaces while maintaining road connectivity.',
      image: '/images/realestate_hero.jpg',
      keyHighlights: ['Low-density community layout', 'Native landscape integration', 'Illustrative property concept'],
      isConcept: true,
      locationOrDomain: 'Residential Master Plan Concept'
    },
    {
      id: 'proj-04',
      title: 'Heavy Logistics Warehouse & Intermodal Terminal',
      divisionId: 'builders',
      divisionName: 'Navanext Builders',
      category: 'Construction',
      shortDescription: 'Pre-engineered industrial storage facility optimized for automated racking and heavy freight handling.',
      fullOverview: 'An illustrative industrial concept featuring 14-meter clear heights, super-flat industrial concrete slabs, and a 24-bay exterior truck apron with automated security access controls.',
      image: '/images/builders_hero.jpg',
      keyHighlights: ['Super-flat high load floor slab', 'Integrated fire suppression system', 'Sample industrial model'],
      isConcept: true,
      locationOrDomain: 'Industrial Infrastructure Concept'
    },
    {
      id: 'proj-05',
      title: 'Enterprise Analytics & Workflow Dashboard',
      divisionId: 'software-technologies',
      divisionName: 'Navanext Software Technologies',
      category: 'Technology',
      shortDescription: 'Unified administrative interface for cross-department performance tracking and resource scheduling.',
      fullOverview: 'A prototype UI/UX and frontend engineering showcase demonstrating how complex data feeds can be visualized cleanly for executive decision-makers without cognitive overload.',
      image: '/images/software_hero.jpg',
      keyHighlights: ['Accessible typography hierarchy', 'Real-time state hydration', 'Illustrative interface design'],
      isConcept: true,
      locationOrDomain: 'Enterprise UI Concept'
    },
    {
      id: 'proj-06',
      title: 'Waterfront Commercial & Advisory Suites',
      divisionId: 'real-estate',
      divisionName: 'Navanext Real Estate',
      category: 'Real Estate',
      shortDescription: 'Repositioned commercial office suites tailored for executive consulting and corporate headquarters.',
      fullOverview: 'A sample asset repositioning framework showing the modern refurbishment of legacy commercial real estate into energy-efficient, grade-A corporate suites with panoramic city vistas.',
      image: '/images/realestate_hero.jpg',
      keyHighlights: ['Acoustically isolated conference suites', 'LEED-aligned interior upgrades', 'Sample commercial framework'],
      isConcept: true,
      locationOrDomain: 'Commercial Real Estate Study'
    },
    {
      id: 'proj-07',
      title: 'Integrated Supply Governance Protocol',
      divisionId: 'fourth-division',
      divisionName: 'Navanext Solutions & Advisory',
      category: 'Other Businesses',
      shortDescription: 'Strategic procurement and supplier auditing system designed for multi-tier industrial operations.',
      fullOverview: 'Illustrative cross-disciplinary framework demonstrating group-level risk management, vendor qualification, and lifecycle tracking across supply networks.',
      image: '/images/advisory_hero.jpg',
      keyHighlights: ['Cross-domain audit checklist', 'Risk mitigation scoring', 'Illustrative advisory model'],
      isConcept: true,
      locationOrDomain: 'Advisory Framework Concept'
    },
    {
      id: 'proj-08',
      title: 'Civic Boulevard & Utility Conduit Network',
      divisionId: 'builders',
      divisionName: 'Navanext Builders',
      category: 'Construction',
      shortDescription: 'Sub-surface civil infrastructure framework incorporating stormwater mitigation and telecommunication conduits.',
      fullOverview: 'An illustrative urban infrastructure prototype showing how subterranean utilities can be organized within modular concrete trenching systems to minimize disruption during future maintenance.',
      image: '/images/builders_hero.jpg',
      keyHighlights: ['Modular trench utility layout', 'High-capacity stormwater basins', 'Illustrative civil design'],
      isConcept: true,
      locationOrDomain: 'Civil Engineering Concept'
    }
  ] as ShowcaseProject[],
};
