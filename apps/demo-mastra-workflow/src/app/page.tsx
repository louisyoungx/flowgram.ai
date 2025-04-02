'use client';
import dynamic from 'next/dynamic';
import './style/index.css';

const Editor = dynamic(() => import('./components/editor') as any, {
  ssr: false,
});

export default function Home() {
  return <Editor />;
}
