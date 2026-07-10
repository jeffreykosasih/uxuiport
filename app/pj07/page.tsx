import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'Peter Parking — One App for Every Meter',
};

export default function Project07() {
  return <ProjectView projectId="07" />;
}
