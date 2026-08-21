import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'Sigma — Spend Before You Spend It',
};

export default function Project08() {
  return <ProjectView projectId='08' />;
}
