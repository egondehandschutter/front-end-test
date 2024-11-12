import { memo } from 'react';

export default memo (function Person({ name, age }) {

  if (name === undefined) {
    return (
      <div className="alert alert-info">
        There is no persons with that name
      </div>
    );
  }

  return (
    <h2>{name} is {age}.</h2>
  );
})
