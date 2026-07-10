import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'Katsu Seiba — Japanese Restaurant Site',
};

export default function Project04() {
  return <ProjectView projectId="04" />;
}
