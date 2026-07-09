/**
 * Service cards on the home page. Edit a card here and the page updates.
 * `price` is the green footer line on each card — keep it number-free
 * (pricing lives only in the footer SEO paragraph, per copy rules).
 */
export interface ServiceCard {
  title: string;
  body: string;
  price: string;
}

export const buildServices: ServiceCard[] = [
  {
    title: 'AI workflow implementation',
    body: 'Get your week back. We take the repeating work, bookings, follow-ups, invoicing, reporting, and build AI that handles it end to end.',
    price: 'Flat-fee projects, scoped up front',
  },
  {
    title: 'Custom AI agents',
    body: 'Agents that research, respond, nurture leads, and report, working in the background while you run the business. Built around how you actually operate.',
    price: 'Live in weeks, not months',
  },
  {
    title: 'Ongoing management',
    body: 'Once your tools are live, we keep them sharp and continue to add capability. Optional, cancel anytime.',
    price: 'Optional, no lock-in',
  },
];

export const trainServices: ServiceCard[] = [
  {
    title: 'AI coaching',
    body: 'Monthly sessions with Joel to build your own AI capability. From first prompt to running your own automations, at your pace, no jargon.',
    price: 'Monthly 1:1 sessions, no lock-in',
  },
  {
    title: 'Team workshops',
    body: 'Half or full-day workshops for your team. We cover the tools, the workflows, and the practical skills to use AI every day, tailored to your industry and how you actually work.',
    price: 'Half day or full day',
  },
  {
    title: 'AI readiness audit',
    body: 'A structured review of your current processes, tools, and team capability. You leave with a clear roadmap of where AI fits and what to do first.',
    price: 'Included in your free AI Snapshot',
  },
];

/** Outcome phrases in the scrolling ticker on the home page. */
export const tickerItems: string[] = [
  'Leads followed up instantly',
  'Admin handled in the background',
  'Enquiries answered in seconds',
  'Invoices processed automatically',
  'Bookings confirmed instantly',
  'Quotes generated in seconds',
  'Meeting notes taken automatically',
  'Reports done in minutes',
  'Reviews managed automatically',
  'Content created every week',
];

/** "Tools we work with" row in the About section. Plain text only — no logos. */
export const tools: string[] = [
  'Claude',
  'ChatGPT',
  'Codex',
  'Microsoft Copilot',
  'Google Workspace',
  'Microsoft 365',
  'Notion',
  'Perplexity',
  'Slack',
];
