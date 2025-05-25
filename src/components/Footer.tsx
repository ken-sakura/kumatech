"use client";

import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo placed in the center */}
        <div className="flex-grow flex justify-center">
          <img src="/app/logo/logo.png" alt="Logo" width={50} height={50} />
        </div>
        <div className="hidden sm:block"> {/* Optional: Hide "Home" button on small screens if logo is prominent */}
          <Link href="/"><Button variant="outline">Home</Button></Link>
        </div>
        <p>&copy; {new Date().getFullYear()} KumaTech. All rights reserved.</p>
      </div>
    </footer>
  );
};


