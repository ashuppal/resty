import { useState } from 'react';

import './Form.scss';

const Form = (props)=>{
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      data,
    };
    
    props.handleApiCall({formData});
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label >

          <span>URL: </span>

          <input data-testid="url-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>

          <button data-testid="button" type="submit">GO!</button>

        </label>

        <label>json data (if any)

          <textarea rows="4" cols="50" onChange={(e) => setData(e.target.value)}/>

        </label>

        <label className="methods">
          <span
            data-testid="get-span"
            onClick={(e) => setMethod(e.target.id)}

          >GET</span>
          <span
            data-testid="post-span"
            onClick={(e) => setMethod(e.target.id)}
           
          >POST</span>
          <span
            onClick={(e) => setMethod(e.target.id)}
 
          >PUT</span>
          <span
            onClick={(e) => setMethod(e.target.id)}

          >DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
