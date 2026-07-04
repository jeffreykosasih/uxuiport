import type { Metadata } from 'next';
import { CaseStudyView } from '@/components/CaseStudyView';

export const metadata: Metadata = {
  title: 'Katsu Seiba — Japanese Restaurant Site',
};

export default function CaseStudy04() {
  return <CaseStudyView projectId="04" />;
}
