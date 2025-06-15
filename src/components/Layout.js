import React from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';

export default function Layout({ children, navigation }) {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-gray-200 font-sans">
      <Head>
        <title>kumatech</title>
        /*<link rel="icon" href="/favicon.ico" />*/
        <link href="[https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap)" rel="stylesheet" />
        {/* Include CSS for highlight.js theme */}
        <link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css](https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css)" />
      </Head>

      <div className="flex">
        <Sidebar navigation={navigation} />
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
           <div className="max-w-4xl mx-auto">
             {children}
           </div>
        </main>
      </div>
    </div>
  );
}

