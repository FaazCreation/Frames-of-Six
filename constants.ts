import { Award, Camera, Calendar, Image as ImageIcon } from 'lucide-react';
import { Benefit, NavItem, TimelineEvent, FAQItem } from './types';

export const REGISTRATION_LINK = "https://forms.gle/vRUTRK31YcZJm1Wk7";
export const BKASH_NUMBER = "01770449540";

// Calculate the next Occurrence of Jan 26, 12:00 PM
const now = new Date();
const currentYear = now.getFullYear();
// Month is 0-indexed (0 is January)
let deadline = new Date(currentYear, 0, 26, 12, 0, 0);

// If the deadline for this year has passed, use next year's date
if (deadline.getTime() < now.getTime()) {
  deadline.setFullYear(currentYear + 1);
}

export const DEADLINE_DATE = deadline;

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Submission', href: '/#submission' },
  { label: 'Committee', href: '/committee' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '#contact' },
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Prize Money',
    description: 'Win attractive monetary rewards for the best captures that tell a story.',
    icon: Award,
  },
  {
    title: 'Exhibition Display',
    description: 'Get your work featured in our grand exhibition attended by photography enthusiasts.',
    icon: ImageIcon,
  },
  {
    title: 'Certificates',
    description: 'Receive official participation certificates to add to your portfolio.',
    icon: Calendar,
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    date: 'Jan 26, 12:00 PM',
    title: 'Submission Deadline',
    description: 'Last chance to submit your entries online.',
  },
  {
    date: 'Jan 28–29',
    title: 'Exhibition Days',
    description: 'The grand showcase of selected photographs at Tejgaon College.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Who can participate in the contest?",
    answer: "The contest is open to everyone! Whether you are a professional photographer, a student, or a hobbyist, we welcome your submissions regardless of your location."
  },
  {
    question: "Is there a limit on the number of submissions?",
    answer: "No, there is no limit to the number of photos you can submit. However, please note that each single image entry requires a separate fee of 500 BDT."
  },
  {
    question: "Are mobile photos accepted?",
    answer: "Yes, mobile photography is accepted. We encourage high-resolution submissions to ensure the best quality for printing and exhibition display."
  },
  {
    question: "What type of editing is allowed?",
    answer: "Basic color correction and cropping are allowed. However, heavy photo manipulation that alters the reality of the image or adds non-existent elements is generally discouraged."
  },
  {
    question: "When and where will the exhibition take place?",
    answer: "The exhibition will be held on January 28–29 at Tejgaon College, Dhaka."
  },
  {
    question: "How will I know if my photo is selected?",
    answer: "Selected participants will be contacted via the email address or phone number provided during registration after the judging process is complete."
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes, all participants whose photos are selected for the exhibition will receive a participation certificate."
  }
];