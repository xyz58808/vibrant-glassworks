
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  fullHeight?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullHeight = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${fullHeight ? 'flex flex-col' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
