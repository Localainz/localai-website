/**
 * Client reviews shown on the home page (between About and the CTA).
 * The section is invisible while this list is empty — add the first
 * review and it appears automatically. Aim for 3 (the layout is a
 * 3-column grid; 4th+ wraps to a new row).
 *
 * To add a review, uncomment the example and fill in real details.
 * Only use reviews you have permission to publish.
 */
export interface Review {
  /** The quote, in the client's own words. Keep it to 2-3 sentences. */
  text: string;
  name: string;
  /** e.g. "Owner, Harbour City Plumbing" */
  role: string;
}

export const reviews: Review[] = [
  // {
  //   text: 'Working with Joel gave us back a full day a week. The follow-up agent alone paid for the project in the first month.',
  //   name: 'Jane Smith',
  //   role: 'Owner, Example Trades Ltd',
  // },
];
