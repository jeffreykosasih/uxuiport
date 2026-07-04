import type { Metadata } from 'next';
import { CaseStudyView } from '@/components/CaseStudyView';

export const metadata: Metadata = {
  title: 'Revo Fitness App Redesign',
};

export default function CaseStudy01() {
  return <CaseStudyView projectId="01" />;
}
