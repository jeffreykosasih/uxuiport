import type { Metadata } from 'next';
import { CaseStudyView } from '@/components/CaseStudyView';

export const metadata: Metadata = {
  title: 'Port Jeffrey — 3D Portfolio',
};

export default function CaseStudy03() {
  return <CaseStudyView projectId="03" />;
}
