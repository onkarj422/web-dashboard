/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import SidebarContent from 'containers/App/components/Sidebar';
import LanguageSelector from 'containers/App/components/LanguageSelector';
import { useLayoutContext } from 'layouts/ShellLayout/LayoutProvider';

const Dashboard = ({ children }) => {
  const layout = useLayoutContext();
  const { setHeaderTitle, setSidebarContent, setHeaderActionRight } = layout;
  useEffect(() => {
    setHeaderTitle(
      <div className="text-lg text-gray-700 font-semibold">
        <span>Dashboard</span>
      </div>,
    );
    setSidebarContent(<SidebarContent />);
    setHeaderActionRight(<LanguageSelector />);
  }, []);
  return <div>{children}</div>;
};

Dashboard.propTypes = {
  children: React.ReactNode,
};

export default Dashboard;
