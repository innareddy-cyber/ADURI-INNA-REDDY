export interface DefenseStep {
  number: number;
  title: string;
  badge: string;
  badgeColor: string;
  numBg: string;
  summary: string;
  description: string;
  capabilities: { icon: string; label: string }[];
}

export interface CoreModule {
  id: string;
  code: string;
  title: string;
  icon: string;
  iconBg: string;
  textColor: string;
  description: string;
  highlights: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
  tags: string[];
  severity: 'High' | 'Critical' | 'Advisory' | 'Urgent';
}

export interface HelplineInfo {
  number: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  priorityColor: string;
}

export interface LegalFramework {
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  sections: string;
}

export const DEFENSE_STEPS: DefenseStep[] = [
  {
    number: 1,
    title: 'PREDICT RISK',
    badge: 'Neural Pattern AI',
    badgeColor: 'bg-red-950/60 text-red-300',
    numBg: 'bg-red-600/90 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]',
    summary: 'AI analyzes patterns and predicts potential risks',
    description: 'Continuous ambient evaluation of location anomalies, route variance, behavioral deviations, and predictive early-warning vulnerability markers.',
    capabilities: [
      { icon: 'query_stats', label: 'Behavior Analysis' },
      { icon: 'speed', label: 'Risk Scoring' },
      { icon: 'warning', label: 'Early Warning' },
      { icon: 'crisis_alert', label: 'Suspicious Activity' },
      { icon: 'manage_search', label: 'Anomaly Scan' },
      { icon: 'shield', label: 'Vulnerability Triage' },
    ],
  },
  {
    number: 2,
    title: 'DETECT THREATS',
    badge: 'Multimodal Vector',
    badgeColor: 'bg-orange-950/60 text-orange-300',
    numBg: 'bg-orange-600/90 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]',
    summary: 'Real-time detection of physical & digital threats',
    description: 'Automated recognition of predatory incoming calls, cyberstalking telemetry, extortion messages, digital deepfakes, and physical perimeter incursions.',
    capabilities: [
      { icon: 'smart_toy', label: 'AI Monitoring' },
      { icon: 'radar', label: 'Threat Detection' },
      { icon: 'chat', label: 'Content Analysis' },
      { icon: 'search_insights', label: 'Cyber Stalking' },
      { icon: 'phishing', label: 'Harassment Scan' },
      { icon: 'security', label: 'Fraud Intercept' },
    ],
  },
  {
    number: 3,
    title: 'PROTECT USERS',
    badge: 'Contextual Armor',
    badgeColor: 'bg-amber-950/60 text-amber-200',
    numBg: 'bg-amber-500/90 text-slate-950 shadow-[0_0_20px_rgba(234,179,8,0.4)]',
    summary: 'Personalized protection and safety recommendations',
    description: 'Zero-knowledge data cloaking, geofenced safe corridors, stealth PIN camouflage calculators, and guardian notifications without invasive privacy breaches.',
    capabilities: [
      { icon: 'lock', label: 'Privacy Defense' },
      { icon: 'gpp_good', label: 'Digital Security' },
      { icon: 'tips_and_updates', label: 'Dynamic Safety Tips' },
      { icon: 'family_restroom', label: 'Parental Control' },
      { icon: 'share_location', label: 'Safe Zones Geo' },
      { icon: 'key', label: 'Access Controls' },
    ],
  },
  {
    number: 4,
    title: 'ASSIST DURING EMERGENCIES',
    badge: 'High-Priority Dispatch',
    badgeColor: 'bg-emerald-950/60 text-emerald-200',
    numBg: 'bg-emerald-500/90 text-slate-950 shadow-[0_0_20px_rgba(34,197,94,0.4)]',
    summary: 'Instant help and smart emergency assistance',
    description: 'One-tap discreet SOS trigger, automatic microphone audio beaconing, keyword distress activation ("Bachao" / "Help"), and sub-12s LEA dispatch link.',
    capabilities: [
      { icon: 'emergency', label: 'One-Tap SOS' },
      { icon: 'near_me', label: 'Live GPS Beacon' },
      { icon: 'mic', label: 'Voice Trigger' },
      { icon: 'notification_important', label: 'Emergency Alerts' },
      { icon: 'contact_phone', label: 'Trusted Contacts' },
      { icon: 'support_agent', label: '24x7 Support Mesh' },
    ],
  },
  {
    number: 5,
    title: 'PRESERVE DIGITAL EVIDENCE',
    badge: 'Sec 65B Admissible',
    badgeColor: 'bg-sky-950/60 text-sky-200',
    numBg: 'bg-sky-600/90 text-white shadow-[0_0_20px_rgba(2,132,199,0.4)]',
    summary: 'Securely collect, store and manage digital evidence',
    description: 'Forensic hash generation, automatic encrypted screen and audio recording, timestamped metadata vaulting fully compliant with Bharatiya Sakshya Adhiniyam standards.',
    capabilities: [
      { icon: 'fiber_manual_record', label: 'Auto-Record Audio' },
      { icon: 'screenshot', label: 'Forensic Captures' },
      { icon: 'history_edu', label: 'Chat & Call Logs' },
      { icon: 'lock_clock', label: 'SHA-256 Vault' },
      { icon: 'cloud_sync', label: 'Encrypted Cloud' },
      { icon: 'folder_special', label: 'LEA Case Dossier' },
    ],
  },
  {
    number: 6,
    title: 'CONNECT HUMAN SUPPORT',
    badge: 'Humanitarian Bridge',
    badgeColor: 'bg-purple-950/60 text-purple-200',
    numBg: 'bg-purple-600/90 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]',
    summary: 'Connect with verified human support and resources',
    description: 'Direct warm handoffs to verified NGO counselors, Special Juvenile Police Units (SJPU), empanelled pro-bono legal advocates, and institutional psychological first-aid.',
    capabilities: [
      { icon: 'volunteer_activism', label: 'NGO Support Net' },
      { icon: 'psychology', label: 'Trauma Counselors' },
      { icon: 'gavel', label: 'Pro-Bono Legal Aid' },
      { icon: 'local_police', label: 'Police Desk Link' },
      { icon: 'balance', label: 'Statutory Guidance' },
      { icon: 'group', label: 'Community Shield' },
    ],
  },
];

export const CORE_MODULES: CoreModule[] = [
  {
    id: 'women-safety',
    code: 'MOD-01 // ACTIVE',
    title: 'Women Safety & SOS Defense',
    icon: 'female',
    iconBg: 'bg-cyan-500/20 text-[#4cd7f6]',
    textColor: 'text-[#4cd7f6]',
    description: 'Discreet and silent distress mechanisms engineered for high-tension physical encounters. Includes an autonomous incoming call generator to deter uncomfortable encounters, Walk-With-Me live route telemetry, and physical anomaly auto-alerts.',
    highlights: [
      'Shake/Volume Key SOS',
      'Fake Call Synthesis',
      'Safe Route Corridor AI',
      'Geo-fenced Sentinel Escort',
    ],
  },
  {
    id: 'child-protection',
    code: 'MOD-02 // POCSO 2012',
    title: 'Child Protection & POCSO Shield',
    icon: 'child_care',
    iconBg: 'bg-purple-500/20 text-[#d0bcff]',
    textColor: 'text-[#d0bcff]',
    description: 'Autonomous on-device detection of online grooming, predatory coercion, cyberbullying, and unapproved adult media. Generates non-punitive, supportive alerts for the minor while alerting parents without invasive message snooping.',
    highlights: [
      'On-Device CSAM Filter',
      'Grooming Heuristics',
      '1098 Direct Incident Link',
      'NCPCR Compliant Triage',
    ],
  },
  {
    id: 'mental-health',
    code: 'MOD-03 // HOPE-1 CORE',
    title: 'Mental Health & Crisis First-Aid',
    icon: 'vital_signs',
    iconBg: 'bg-emerald-500/20 text-emerald-400',
    textColor: 'text-emerald-400',
    description: 'Powered by Cyberhelp’s emotional de-escalation engine. Instant non-judgmental guidance for victims of cyber blackmail, non-consensual deepfakes, or domestic trauma, facilitating rapid warm handoffs to licensed psychiatrists.',
    highlights: [
      'Sextortion Mitigation',
      'Panic Reduction Voiceflow',
      'Verified Tele-Counseling',
      'Trauma First-Aid Desk',
    ],
  },
  {
    id: 'stealth-vault',
    code: 'MOD-04 // ZERO-TRACE',
    title: 'Stealth Privacy & Anti-Tamper Vault',
    icon: 'lock_reset',
    iconBg: 'bg-blue-600/20 text-[#adc6ff]',
    textColor: 'text-[#adc6ff]',
    description: 'Camouflages the app icon as a standard working scientific calculator. If forced to open under duress, a secondary decoy PIN displays innocent calculations while silently alerting trusted contacts and maintaining a tamper-proof encrypted store.',
    highlights: [
      'Calculator Decoy Mode',
      'Duress PIN Siren/Wipe',
      'Zero Local Unencrypted Cache',
      'Self-Destruct Contingency',
    ],
  },
];

export const LEGAL_FRAMEWORKS: LegalFramework[] = [
  {
    title: 'POCSO Act 2012',
    icon: 'balance',
    iconColor: 'text-[#4cd7f6]',
    description: 'Zero-tolerance mandatory reporting pathways directly aligning with National Commission for Protection of Child Rights (NCPCR) and SJPU protocols.',
    sections: 'Section 19 & 21 Compliance • Child Welfare Committee Synced',
  },
  {
    title: 'BSA 2023 / Sec 65B',
    icon: 'verified',
    iconColor: 'text-[#adc6ff]',
    description: 'Automated certificate synthesizer preserving continuous cryptographic hash integrity, meeting Bharatiya Sakshya Adhiniyam standards for digital admissibility.',
    sections: 'Bharatiya Sakshya Adhiniyam 2023 • Tamper-proof SHA-256 Vault',
  },
  {
    title: 'DPDP Act 2023',
    icon: 'lock',
    iconColor: 'text-emerald-400',
    description: 'Data minimization and purpose-specific consent architecture. Never sells, advertises, or leaks citizen telemetry to commercial entities.',
    sections: 'Digital Personal Data Protection Act • On-Device Neural Processing',
  },
  {
    title: 'IT Act 2000 • Sec 66E/67',
    icon: 'gavel',
    iconColor: 'text-[#d0bcff]',
    description: 'Integrated mitigation tools for cyber voyeurism, harassment, and non-consensual sexually explicit content distribution with automated StopNCII hashes.',
    sections: 'Sections 66C, 66D, 66E, 67, 67A • Immediate Take-down Triage',
  },
];

export const HELPLINES: HelplineInfo[] = [
  {
    number: '112',
    name: 'National Emergency Response (ERSS)',
    category: 'Police / Fire / Ambulance',
    description: 'Integrated national emergency dispatch reachable 24/7 across all Indian states and Union Territories.',
    icon: 'emergency',
    priorityColor: 'text-red-400 border-red-500/30 bg-red-950/20',
  },
  {
    number: '1930',
    name: 'National Cyber Crime Reporting Helpline',
    category: 'Financial Fraud & Digital Arrest',
    description: 'Operated by Indian Cyber Crime Coordination Centre (I4C) for golden-hour financial freeze & reporting.',
    icon: 'security',
    priorityColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
  },
  {
    number: '1098',
    name: 'Childline Emergency Care & Protection',
    category: 'Minors & POCSO Support',
    description: '24-hour toll-free emergency phone service for children in distress, run under MWCD.',
    icon: 'child_care',
    priorityColor: 'text-purple-400 border-purple-500/30 bg-purple-950/20',
  },
  {
    number: '181',
    name: 'Women Helpline (Domestic Abuse & Distress)',
    category: 'Women Safety & Counsel',
    description: '24x7 toll-free telecom service providing integrated support and assistance to women affected by violence.',
    icon: 'female',
    priorityColor: 'text-amber-400 border-amber-500/30 bg-amber-950/20',
  },
  {
    number: '1091',
    name: 'Women Police Helpline',
    category: 'Immediate Police Assistance',
    description: 'Direct response channel to local Women Police Stations for urgent physical safety protection.',
    icon: 'local_police',
    priorityColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Exposing the Multi-State Digital Arrest Fraud Syndicate in Hyderabad',
    category: 'Financial Crime',
    date: 'Oct 10, 2026',
    readTime: '6 min read',
    summary: 'Investigative breakdown of how fake CBI, ED, and Mumbai Police Skype caller modules operate from cross-border call centers targeting senior citizens and corporate executives.',
    author: 'Aduri Inna Reddy (Chief Editor)',
    tags: ['Digital Arrest', 'CBI Impersonation', 'Money Laundering', 'Cyber Crime News'],
    severity: 'Critical',
  },
  {
    id: 'news-2',
    title: 'Deepfake Sextortion Rings Targeting College Students: The Autonomous Mitigation Protocol',
    category: 'Women & Minors',
    date: 'Oct 08, 2026',
    readTime: '5 min read',
    summary: 'How synthetic voice cloning and AI nude generation are weaponized in Telegram extortion networks, and how SURAKSHA AI StopNCII hashing prevents victim compromise.',
    author: 'Editorial Desk & Forensic Cell',
    tags: ['Deepfakes', 'POCSO', 'Telegram Scams', 'Forensics'],
    severity: 'High',
  },
  {
    id: 'news-3',
    title: 'Golden Hour Triage: How Citizens Can Freeze Frozen Bank Funds within 120 Minutes on 1930',
    category: 'Citizen Guide',
    date: 'Oct 05, 2026',
    readTime: '4 min read',
    summary: 'A step-by-step forensic blueprint on transaction hashes, UTR tracking, and inter-bank freezing through Cyber Helps NGO victim assistance grid.',
    author: 'Cyber Helps Legal Aid Wing',
    tags: ['1930', 'Bank Freeze', 'UPI Fraud', 'Victim Support'],
    severity: 'Advisory',
  },
  {
    id: 'news-4',
    title: 'Suraksha AI Kernel v4.8 Released with On-Device Multilingual Voice SOS in 9 Indian Languages',
    category: 'Technology & Defense',
    date: 'Oct 01, 2026',
    readTime: '7 min read',
    summary: 'Zero-latency neural voice recognition detects panic keywords in Hindi, Telugu, Tamil, Marathi, Bengali, and Kannada without active internet connectivity.',
    author: 'Cyberhelps Technologies R&D',
    tags: ['Suraksha AI', 'Voice SOS', 'On-Device AI', 'Sovereign Tech'],
    severity: 'Urgent',
  },
];

export const FAQS = [
  {
    q: 'How confidential is my news tip or story lead?',
    a: 'We adhere to global investigative journalist non-disclosure principles. If you choose the ‘Remain Anonymous’ toggle, our server scrubs IP logs and incoming identity tokens. Your identity will never be disclosed to external parties or third-party agencies.',
    category: 'Whistleblower',
  },
  {
    q: 'Can I reach Aduri Inna Reddy directly for urgent cyber crime emergencies?',
    a: 'Yes. As Founder Chairman, Aduri Inna Reddy maintains direct public accessibility via WhatsApp and phone at +91 98496 06691 for high-severity cyber victim distress calls, extortion emergencies, and media briefings.',
    category: 'Leadership',
  },
  {
    q: 'What is the procedure for corrections or retractions on cybercrimenews.net?',
    a: 'Submit a correction notice with the article headline, URL, and concrete counter-evidence to editor@cybercrimenews.net. Our editorial board verifies retractions within 24 hours under our transparent correction rubric.',
    category: 'Editorial',
  },
  {
    q: 'Is Cyber Helps NGO consultation free of cost?',
    a: 'Yes. Cyber Helps NGO (Cyberhope Help Initiative Foundation • TS/2024/0397972) is a non-profit registered foundation. Citizen triage, psychological trauma guidance, and FIR drafting advisory are 100% free of charge for victims.',
    category: 'NGO Support',
  },
  {
    q: 'What is the Section 65B Bharatiya Sakshya Adhiniyam compliance feature?',
    a: 'SURAKSHA AI computes SHA-256 cryptographic hashes for audio recordings, chat exports, and threat screenshots the second they are captured, creating a verifiable timestamped chain-of-custody admissible in Indian courts.',
    category: 'Legal',
  },
];
