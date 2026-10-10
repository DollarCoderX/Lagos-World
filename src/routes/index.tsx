import { createFileRoute } from "@tanstack/react-router";
import { LagosIntro } from '@/components/lagos-intro';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Lagos World — Same City. Different Dreams.' },
    { name: 'description', content: 'Enter Lagos World. A cinematic journey through the city, from sunset on the waterfront to the skyline and nightlife.' },
    { property: 'og:title', content: 'Lagos World — The Introduction' },
    { property: 'og:description', content: 'Same city. Different dreams. Your Lagos World story begins here.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: LagosIntro,
});
