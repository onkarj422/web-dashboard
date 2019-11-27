import React from 'react';
import { PropTypes } from 'prop-types';

const Profile = props => (
  <div className="container h-full flex flex-col items-center justify-center">
    <div className="relative bg-blue-200 rounded-full h-20 w-20 flex items-center justify-center">
      <span className="text-5xl text-white">
        <i className="fa fa-user" />
      </span>
      <div className="absolute interactive bottom-0 right-0 bg-white rounded-full h-6 w-6 flex items-center justify-center">
        <i className="fa fa-sun-o text-gray-600" />
      </div>
    </div>
    <div className="mt-4 text-center">
      <span className="text-sm font-semibold">{props.name}</span>
      <br />
      <span className="text-xs font-thin text-gray-600">{props.position}</span>
    </div>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
};

export default Profile;
