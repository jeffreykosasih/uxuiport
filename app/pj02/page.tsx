import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'iDriver Delivery App Redesign',
};

export default function Project02() {
  return <ProjectView projectId="02" />;
}
