import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'Rooted — Habit App Concept',
};

export default function Project05() {
  return <ProjectView projectId="05" />;
}
