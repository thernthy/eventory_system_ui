import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers'; // Import the AppWrappers component

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="kh">
      <body id={'root'}>
        <AppWrappers>{children}</AppWrappers>{' '}
      </body>
    </html>
  );
}
