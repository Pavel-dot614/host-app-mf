import React, { lazy } from 'react';

const RemoteTodoTable = lazy(() => import('remote_app/TodoTable'));

const RemoteTodoTableWrapper: React.FC = () => {
  return <RemoteTodoTable />;
};

export default RemoteTodoTableWrapper;
