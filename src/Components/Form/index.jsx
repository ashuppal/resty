import { useState } from 'react';

import './Form.scss';

const Form = (props)=>{
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    props.handleApiCall({method, url, data});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="form-url" onChange={(e) => setUrl(e.target.value)} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label id="textarea">
          Post / Put Input:
          <textarea data-testid="form-textarea" onChange={(e) => setData(e.target.value)} rows="2" cols="10"></textarea>
        </label>
        
        <label className="methods">
          <span id="get" onClick={(e) => setMethod('get')}>GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
