"use client";

import React from 'react';
import Link from 'next/link';
import {Button} from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
        <p>&copy; {new Date().getFullYear()} KumaTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

