import React from 'react';

const RecentlyViewed = () => (
  <div className="h-64">
    <div className="uppercase font-bold text-xs text-gray-500 mb-2">
      <span>Recently Viewed</span>
    </div>
    <div>
      <div className="container h-6 flex items-center w-full text-xs text-gray-800 interactive">
        <span>Overall Performance</span>
        <i className="fa fa-long-arrow-right ml-auto text-gray-500" />
      </div>
      <div className="container h-6 flex items-center w-full text-xs text-gray-800 interactive">
        <span>Invoice #940</span>
        <i className="fa fa-long-arrow-right ml-auto text-gray-500" />
      </div>
      <div className="container h-6 flex items-center w-full text-xs text-gray-800 interactive">
        <span>Customer: Minerva Viewer</span>
        <i className="fa fa-long-arrow-right ml-auto text-gray-500" />
      </div>
    </div>
  </div>
);

export default RecentlyViewed;
