import React from 'react';

import './Results.scss';


import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

const Results = (props) => {
  return (
    <section>
      {
        props.loading
          ? <p>Loading the results</p>
          : <pre data-testid="json">
            {
              props.data
                ? <JSONPretty data={props.data} theme={JSONPrettyMon}></JSONPretty>
                : null
            }
          </pre>
      }

    </section>
  );
}

export default Results;




// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;