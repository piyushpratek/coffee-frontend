import React from 'react';

const GridExample = () => {
  return (
    <div>
      {/* Total columns are always 12, by default each column has equal widths */}
      <h1>GridExample 1</h1>
      <div className='row'>
        <div className='col bg-primary'>col1</div>
        <div className='col bg-secondary'>col2</div>
      </div>

      <h1>GridExample 2</h1>
      <div className='row'>
        <div className='col bg-primary'>col1</div>
        <div className='col bg-secondary'>col2</div>
        <div className='col bg-info'>col3</div>
      </div>

      <h1>GridExample 3</h1>
      <div className='row'>
        <div className='col-4'>col1</div>
        <div className='col-8'>col2</div>
      </div>
    </div>
  );
};

export default GridExample;
