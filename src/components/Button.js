import React from 'react';
import classNames from 'classnames';

export default (props) => {
  let className = classNames(
    'btn',
    {
      'btn-success': props.success,
      'btn-block': props.block
    }
  );
  return <button 
    className={className}
    onClick={props.onClick}
  >{props.children}</button>
};
