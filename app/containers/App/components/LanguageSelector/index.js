/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classNames from 'classnames';
import Select, { components } from 'components/Select';
import languageOptions from './constants';

const LanguageSelector = () => {
  const [value, onChange] = useState({ value: 'EN', label: 'ENG' });

  const SingleValue = props => {
    const { children, options } = props;
    const option = options.find(o => o.value === props.data.value);
    const flagUrl = option && option.flag;
    return (
      <components.SingleValue className="text-sm" {...props}>
        <div className="flex items-center">
          <img
            className="mr-4"
            width={24}
            height={18}
            src={flagUrl}
            alt="flag"
          />
          <span className="font-thin">{children}</span>
        </div>
      </components.SingleValue>
    );
  };

  const Option = ({ children, ...props }) => {
    const flagUrl = props.data && props.data.flag;
    return (
      <div className="mx-2 border-b border-gray-300">
        <components.Option
          className={classNames(
            'interactive',
            props.isSelected ? 'bg-blue-500' : 'bg-transparent',
          )}
          {...props}
        >
          <div className="flex">
            <img width={24} height={18} src={flagUrl} alt="flag" />
            <span className="ml-2 font-thin">{children}</span>
          </div>
        </components.Option>
      </div>
    );
  };

  return (
    <Select
      components={{ SingleValue, Option }}
      value={value}
      onChange={onChange}
      options={languageOptions}
      isSearchable={false}
    />
  );
};

export default LanguageSelector;
