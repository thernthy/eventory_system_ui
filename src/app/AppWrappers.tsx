'use client';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // import the initialized i18n instance
import 'styles/App.css';
import 'styles/Contact.css';
// import '@asseinfo/react-kanban/dist/styles.css';
// import 'styles/Plugins.css';
import 'styles/MiniCalendar.css';
import 'styles/index.css';

import dynamic from 'next/dynamic';

const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
  ssr: false,
});

export default function AppWrappers({ children }: { children: ReactNode }) {
  // @ts-expect-error
  return (
    <NoSSR>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </NoSSR>
  );
}
