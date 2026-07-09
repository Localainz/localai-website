/**
 * Single source of truth for the FAQ page.
 * The accordion AND the FAQPage JSON-LD schema are both generated from
 * this list, so they can never drift out of sync. Add questions here.
 */
export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  label: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    label: 'Getting started',
    items: [
      {
        q: 'What happens in the free 30-minute conversation?',
        a: "A straight conversation about your business, not a pitch. We talk about what you do, where time gets lost, and where you want to grow. By the end, we know whether AI can genuinely help, and where to start if it can.",
      },
      {
        q: 'What is the AI Snapshot?',
        a: 'A personalised report that lands in your inbox within 24 hours of our chat. It sets out the single highest-value place to start, plus other opportunities we spot along the way, in plain English.',
      },
      {
        q: 'Is the AI Snapshot really free — is there a catch?',
        a: "Really free. No catch. The conversation and the Snapshot are genuinely useful on their own, even if you decide not to go further. We'd rather earn your business by giving value first.",
      },
      {
        q: 'Do I need any tech knowledge?',
        a: "None at all. We explain everything in plain language. If we use a term you don't recognise, stop us. That's on us, not you.",
      },
      {
        q: 'Is AI even relevant to a business like mine?',
        a: "Almost always, yes. Every business has repeating admin: bookings, invoicing, follow-ups, reporting. If your week has tasks like that, there's usually something worth automating. If we don't think AI genuinely helps, we'll say so.",
      },
    ],
  },
  {
    label: 'Working together',
    items: [
      {
        q: 'What does your process look like?',
        a: 'A free 30-minute conversation, then your AI Snapshot within 24 hours. If you want to go ahead, we build, test, and hand it over, typically in three to six weeks, with the option to stay on for ongoing management.',
      },
      {
        q: 'Who will I actually work with?',
        a: 'Joel, directly, backed by a small technical team. No account managers, no handoffs. You deal with the same person from first call to launch.',
      },
      {
        q: 'What tools do you work with?',
        a: "Claude, ChatGPT, Codex, Microsoft Copilot, Google Workspace, Microsoft 365, Notion, Perplexity, and Slack, among others. We pick whatever fits how you already work, not what's trendy.",
      },
      {
        q: 'Is my business data safe?',
        a: "Yes. We use reputable, established tools with proper data protections, and we're careful about what goes where. If your business handles sensitive data, we build with that in mind from day one.",
      },
      {
        q: 'Who owns what we build?',
        a: 'You do. Every workflow, agent, and automation we build belongs to your business outright. No licensing fees to us, no lock-in.',
      },
      {
        q: 'Will I be dependent on you after the build?',
        a: "Every build comes with proper handover so you understand what's been built and how it works. No locked-in contracts. If you'd rather run things with minimal reliance on us, we design for that from the start.",
      },
      {
        q: 'What does it actually cost to work with you?',
        a: 'Build projects are flat-fee and scoped upfront, and coaching is a simple per-session rate with no lock-in. You always know the number before we start.',
      },
    ],
  },
];
