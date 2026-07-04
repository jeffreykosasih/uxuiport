import type { Metadata } from 'next';
import { CaseStudyView } from '@/components/CaseStudyView';

export const metadata: Metadata = {
  title: 'iDriver Delivery App Redesign',
};

export default function CaseStudy02() {
  return <CaseStudyView projectId="02" />;
}
