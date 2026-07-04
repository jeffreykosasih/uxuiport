import type { Metadata } from 'next';
import { CaseStudyView } from '@/components/CaseStudyView';

export const metadata: Metadata = {
  title: 'Fruitea — Fruit & Veg Learning Site',
};

export default function CaseStudy06() {
  return <CaseStudyView projectId="06" />;
}
