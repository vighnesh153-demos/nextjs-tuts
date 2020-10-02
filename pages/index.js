import React from "react";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello NextJS</h1>
      <p>Read <Link href="/about"><a>About</a></Link>!</p>
    </div>
  )
}
