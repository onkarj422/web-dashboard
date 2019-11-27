/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import Header from 'components/Header';
import { useMediaQueryContext } from 'providers/MediaQuery';
import { useLayoutContext } from 'layouts/ShellLayout/LayoutProvider';

const Layout = ({ children }) => {
  const { md } = useMediaQueryContext();
  const { headerTitle, sidebarContent, headerActionRight } = useLayoutContext();
  const isDocked = !!md;
  const [sidebarOpen, toggleSidebar] = useState(isDocked);
  const openSidebar = () => {
    toggleSidebar(!sidebarOpen);
  };

  const toggleAction = (
    <div
      onClick={openSidebar}
      className="container w-8 text-xl text-gray-700 text-center interactive ripple"
    >
      <i className="fa fa-bars" />
    </div>
  );

  return (
    <div className="w-full h-screen">
      <Sidebar
        sidebarClassName="z-50"
        sidebar={sidebarContent}
        open={sidebarOpen}
        docked={isDocked}
        onSetOpen={openSidebar}
        shadow={false}
      >
        <div className="container h-full">
          <Header
            title={headerTitle}
            actionLeft={isDocked ? null : toggleAction}
            actionRight={headerActionRight}
            fixed
          />
          {children}
        </div>
      </Sidebar>
    </div>
  );
};

Layout.propTypes = {
  children: React.ReactNode,
};

export default Layout;
