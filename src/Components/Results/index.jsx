import React from 'react';

import './Results.scss';

const Results = props => {
  return (
    <>
      <section className="results">
        <h3>Headers</h3>
        <pre>{props.headers}</pre>
        <h3>Count</h3>
        <pre>{props.count}</pre>
        <h3>Results</h3>
        <pre>{props.results}</pre>
      </section>
    </>
  );
}

export default Results;