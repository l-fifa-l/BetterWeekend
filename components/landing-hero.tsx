'use client';

import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const LandingHero = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best way to learn is to</h1>
        <div className="text-transparent bg-clip-text bg-white">
          <TypewriterComponent
            options={{
              strings: ['Explore.', 'Connect.', 'Engage.', 'Discover.'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-200">
        Join with your kind.
      </div>
      <div>
        <Link href="">
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Get to Know Why
          </Button>
        </Link>
      </div>
    </div>
  );
};