import React from "react";
import Link from 'next/link';

const About = (props) => {
  return <div>
    <h1>Hello from the About Page</h1>
    <p>Back to <Link href="/"><a>Home</a></Link></p>
  </div>
};

export default About;
