import React from 'react';
import Navigation from 'containers/App/components/Navigation';
import Profile from './components/Profile';
import RecentlyViewed from './components/RecentlyViewed';

const SidebarContent = () => (
  <div className="container bg-white w-64 h-auto border-r border-gray-200 border-solid z-50">
    <div className="container interactive ripple h-16 border-b border-gray-200 border-solid flex items-center justify-center">
      <i className="fa fa-home text-xl text-gray-600" />
    </div>
    <div className="container h-48 border-b border-gray-200 border-solid">
      <Profile name="Martha Blair" position="Developer" />
    </div>
    <div className="container px-6 py-4">
      <Navigation />
    </div>
    <div className="container h-full px-6 py-4">
      <RecentlyViewed />
    </div>
  </div>
);

export default SidebarContent;
