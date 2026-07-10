import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'Port Jeffrey — 3D Portfolio',
};

export default function Project03() {
  return <ProjectView projectId="03" />;
}
