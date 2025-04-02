'use client';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./components/editor') as any, {
  ssr: false,
});

export default function Home() {
  return <Editor />;
}
