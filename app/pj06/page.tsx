import type { Metadata } from 'next';
import { ProjectView } from '@/components/ProjectView';

export const metadata: Metadata = {
  title: 'Fruitea — Fruit & Veg Learning Site',
};

export default function Project06() {
  return <ProjectView projectId="06" />;
}
