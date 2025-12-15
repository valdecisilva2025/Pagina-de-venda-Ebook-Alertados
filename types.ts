import React from 'react';

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
}

export interface ThemeItem {
  icon: React.ReactNode;
  label: string;
}