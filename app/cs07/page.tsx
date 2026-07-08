import type { Metadata } from 'next';
import { CaseStudyView } from '@/components/CaseStudyView';

export const metadata: Metadata = {
  title: 'Peter Parking — One App for Every Meter',
};

export default function CaseStudy07() {
  return <CaseStudyView projectId="07" />;
}
