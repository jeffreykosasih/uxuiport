import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'Revo Fitness App Redesign',
};

export default function Project01() {
  return <ProjectView projectId="01" />;
}
