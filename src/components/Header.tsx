"use client";

import React from 'react';
import Link from 'next/link';
import {cn} from "@/lib/utils";

export const Header = () => {
  return (
    <header className="bg-secondary text-secondary-foreground py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
        KumaTech
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


