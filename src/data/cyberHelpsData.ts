export interface TechProduct {
  id: string;
  name: string;
  subtitle: string;
  stage: string;
  stageColor: string;
  category: 'Digital Safety' | 'Scam & Fraud' | 'Legal & Governance' | 'Social Welfare' | 'All Systems';
  domain: string;
  description: string;
  actionLabel: string;
  featured?: boolean;
}

export interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
}

export interface AiLab {
  id: string;
  code: string;
  title: string;
  description: string;
}

export interface TechPublication {
  id: string;
  type: string;
  readTime: string;
  title: string;
  description: string;
  meta: string;
}

export const CORE_TENETS = [
  {
    num: '01',
    title: 'Ethical Autonomous Agents',
    description: 'Autonomous decision engines bounded by deterministic safety guardrails, auditable weights, and strict adherence to explainability.',
    icon: 'shield_check',
  },
  {
    num: '02',
    title: 'Zero-Trust Protocol Pipelines',
    description: 'Never trust, always verify: cryptographic verification for every transaction, data payload, model inference, and external call.',
    icon: 'verified_user',
  },
  {
    num: '03',
    title: 'Community-First Defense Models',
    description: 'Distributing cybersecurity resilience so that breakthroughs in enterprise defense directly fuel accessible public protection utilities.',
    icon: 'groups',
  },
];

export const PRODUCTS_PORTFOLIO: TechProduct[] = [
  {
    id: 'trinetra',
    name: 'TRINETRA — Your Digital Guardian',
    subtitle: 'Mobile & Endpoint Defense',
    stage: 'IN ACTIVE DEVELOPMENT',
    stageColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    category: 'Digital Safety',
    domain: 'Mobile Security',
    description: 'Comprehensive mobile safety platform delivering real-time heuristic threat awareness, anti-malware telemetry, privacy audits, and parental cyber protection controls.',
    actionLabel: 'Mobile Kernel Telemetry',
    featured: true,
  },
  {
    id: 'nigha-ai',
    name: 'NIGHA AI',
    subtitle: 'Personal Safety AI',
    stage: 'CONCEPT & PROTOTYPING',
    stageColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    category: 'Digital Safety',
    domain: 'Women Safety',
    description: 'Dedicated digital safety assistant engineered for women’s emergency threat detection, automated SOS beaconing, ambient audio distress triggers, and incident verification.',
    actionLabel: 'SOS Neural Trigger',
    featured: true,
  },
  {
    id: 'detection-ai',
    name: 'Detection AI',
    subtitle: 'Audio & Voice Defense',
    stage: 'ADVANCED LAB PROTOTYPE',
    stageColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    category: 'Scam & Fraud',
    domain: 'Deepfake Defense',
    description: 'Deep-learning acoustic analysis engine detecting real-time synthetic voice cloning, deepfake audio anomalies, and telephonic social engineering impersonation.',
    actionLabel: 'Spectral Phoneme Audit',
    featured: true,
  },
  {
    id: 'truecheck-ai',
    name: 'TrueCheck AI',
    subtitle: 'Media Forensics',
    stage: 'RESEARCH & EVALUATION',
    stageColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    category: 'Scam & Fraud',
    domain: 'Media Authenticity',
    description: 'Multi-modal content authenticity verification engine detecting synthetic media, doctored credentials, manipulated documents, and misleading misinformation vectors.',
    actionLabel: 'Diffusion Artifact Parser',
  },
  {
    id: 'nyayasethu',
    name: 'NyayaSetu',
    subtitle: 'LegalTech & Public Good',
    stage: 'PLATFORM CONCEPT',
    stageColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    category: 'Legal & Governance',
    domain: 'Citizen Rights',
    description: 'AI-assisted legal awareness and automated cyber complaint structuring platform simplifying victim report filing and statutory rights discovery under cyber legislation.',
    actionLabel: 'Statutory Drafting AI',
  },
  {
    id: 'cine-shield',
    name: 'CINE SHIELD',
    subtitle: 'Digital Rights & Anti-Piracy',
    stage: 'PROPOSED SOLUTION',
    stageColor: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
    category: 'Scam & Fraud',
    domain: 'IP Protection',
    description: 'Automated digital watermarking, real-time stream infringement tracking, and intellectual property asset protection shield for film producers and media distributors.',
    actionLabel: 'Watermark Fingerprinting',
  },
  {
    id: 'land-shield-ai',
    name: 'LAND SHIELD AI',
    subtitle: 'RegTech & Property Integrity',
    stage: 'FEASIBILITY PHASE',
    stageColor: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    category: 'Legal & Governance',
    domain: 'Property Integrity',
    description: 'Computer vision and spatial document verification system to detect forged land deed registries, anomalous ownership chains, and property transaction fraud.',
    actionLabel: 'Deed OCR Cross-Check',
  },
  {
    id: 'hope-i',
    name: 'HOPE I',
    subtitle: 'Compassionate AI',
    stage: 'ETHICAL INITIATIVE (PILOT)',
    stageColor: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    category: 'Social Welfare',
    domain: 'Mental Health First-Aid',
    description: 'Privacy-first, empathetic conversational guide providing emotional first-aid, stress decompression, and clear triage bridges to certified human clinicians.',
    actionLabel: 'Strict Clinical Boundary',
  },
  {
    id: 'ccs-bot',
    name: 'CCS BOT',
    subtitle: 'Cybercrime Response',
    stage: 'BETA TESTING',
    stageColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    category: 'Scam & Fraud',
    domain: 'Victim Triage',
    description: 'Rapid-triage virtual assistant guiding cyber fraud victims through digital evidence preservation, emergency bank card freezing, and statutory complaint steps.',
    actionLabel: 'Automated Triage Tree',
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    icon: 'psychology',
    title: 'AI & Machine Learning',
    description: 'Transformers, real-time edge neural inference, acoustic classifiers, and synthetic vector anomaly detection engines.',
  },
  {
    icon: 'security',
    title: 'Cybersecurity & Safety',
    description: 'End-to-end encryption frameworks, Zero-Trust network segmentation, and credential vault integrity verification.',
  },
  {
    icon: 'auto_mode',
    title: 'AI-Powered Automation',
    description: 'Self-healing defensive fabrics, autonomous incident triage, and low-latency automated containment runbooks.',
  },
  {
    icon: 'radar',
    title: 'Threat Intelligence',
    description: 'Dark-web data monitoring, credential stuffing counter-measures, and dynamic attack surface mapping.',
  },
  {
    icon: 'smartphone',
    title: 'Secure Software & Mobile',
    description: 'Hardened Android & iOS kernel wrappers, tamper-evident compilation, and resilient microservice APIs.',
  },
  {
    icon: 'science',
    title: 'Research & Sandboxing',
    description: 'Rapid proof-of-concept synthesis, high-throughput heuristic sandbox builds, and synthetic payload simulations.',
  },
  {
    icon: 'gavel',
    title: 'Responsible AI & Privacy',
    description: 'Federated learning architectures, algorithmic fairness audits, and zero-retention raw biometrics storage policies.',
  },
  {
    icon: 'public',
    title: 'Impact Technologies',
    description: 'Accessible cybersecurity defense systems tailored for regional communities, senior citizens, and civic platforms.',
  },
];

export const AI_LABS: AiLab[] = [
  {
    id: 'lab-1',
    code: 'LAB 01 // NEURAL APPLIED',
    title: 'AI Research & Edge Inference',
    description: 'Constructing lightweight on-device models that classify zero-day mobile malware without leaking telemetry to central cloud infrastructure.',
  },
  {
    id: 'lab-2',
    code: 'LAB 02 // TALENT INCUBATION',
    title: 'Student Innovation Hub',
    description: 'Mentoring university engineering prodigies through red-team cyber drills, algorithm testing, and applied security fellowships.',
  },
  {
    id: 'lab-3',
    code: 'LAB 03 // STRESS SIMULATION',
    title: 'Deep Sandboxing & Penetration',
    description: 'Continuous adversarial attack generation to test synthetic voice detector robustness against generative adversarial networks (GANs).',
  },
];

export const PUBLICATIONS: TechPublication[] = [
  {
    id: 'pub-1',
    type: 'THREAT BRIEFING',
    readTime: '5 min read',
    title: 'Mitigating Synthetic Voice Clone Frauds in Modern Financial Systems',
    description: 'An architectural breakdown of spectral phoneme analysis to intercept synthetic audio during active bank verification calls.',
    meta: 'OCT 2025 • CHT RESEARCH',
  },
  {
    id: 'pub-2',
    type: 'ETHICS & DESIGN',
    readTime: '7 min read',
    title: 'Ethical Guardrails in Conversational AI: The Architectural Blueprint of HOPE I',
    description: 'Balancing empathetic conversational nuance with deterministic clinical safety triggers and strict zero-retention logs.',
    meta: 'NOV 2025 • AI ETHICS LAB',
  },
  {
    id: 'pub-3',
    type: 'WHITEPAPER',
    readTime: '11 min read',
    title: 'Next-Gen Mobile Threat Landscapes: What TRINETRA Teaches Us About Edge Security',
    description: 'Investigating battery-friendly neural heuristic engines executing directly on hardware neural processing units (NPUs).',
    meta: 'JAN 2026 • MOBILE SYSTEMS',
  },
];
