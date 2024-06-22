import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | <Link href="/login">Login</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
