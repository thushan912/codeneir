import React from 'react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  rating?: number;
  description: string;
  longDescription: string;
  platformBadges: ('Android' | 'iOS' | 'Web' | 'SaaS' | 'AI')[];
  iconComponent: React.ComponentType<{ className?: string }>;
  iconSrc?: string;
  features: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to reference Lucide React icons dynamically
  bullets: string[];
}

export interface Metric {
  label: string;
  value: string;
  sublabel: string;
  colorClass: string;
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'language' | 'other';
  iconColor: string;
}
