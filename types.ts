import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}