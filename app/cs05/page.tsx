import type { Metadata } from 'next';
import { CaseStudyView } from '@/components/CaseStudyView';

export const metadata: Metadata = {
  title: 'Rooted — Habit App Concept',
};

export default function CaseStudy05() {
  return <CaseStudyView projectId="05" />;
}
