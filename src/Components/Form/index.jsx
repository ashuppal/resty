import { useReducer } from 'react';
import './Form.scss';

export const intialState = {
  method : 'get',
  url : '',
  data: '',
}

export const formReducer = (state = intialState,action) =>{
  switch(action.type){
    case 'SET_METHOD':
      return {...state, method: action.payload};
    case 'SET_URL': 
    return  {...state, url: action.payload};
    case 'SET_DATA':
      return {...state, data: action.payload};
      default:
        return state;
  }
}




const Form = (props) => {

const [state,dispatch] = useReducer(formReducer, intialState);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method : state.method,
      url: state.url,
      data: state.data,
    };
    props.handleApiCall(formData);
  }

  const changeUrl = (e) => dispatch({type:'SET_URL',payload: e.target.value});

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input
           data-testid="url-input" 
           name='url' type='text' 
           onChange={changeUrl}/>
          <button data-testid="button" type="submit">GO!</button>
        </label>
        <label>json data (if necessary)
          <textarea rows="4" cols="50"
           onChange={(e) => dispatch({type:'SET_DATA',payload:e.target.value})}/>
        </label>
        <label className="methods">
          <span
            data-testid="get-span"
            onClick={(e) => dispatch({type:'SET_METHOD',payload: e.target.id})}
            style={{ backgroundColor: state.method === 'get' ? 'gray' : '#ccc' }} id="get"
          >
            GET
          </span>
          <span
            data-testid="post-span"
            onClick={(e) => dispatch({type:'SET_METHOD',payload: e.target.id})}
            style={{ backgroundColor: state.method === 'post' ? 'gray' : '#ccc' }} id="post"
          >POST</span>
          <span
            onClick={(e) => dispatch({type:'SET_METHOD',payload: e.target.id})}
            style={{ backgroundColor: state.method === 'put' ? 'gray' : '#ccc' }} id="put"
          >PUT</span>
          <span
            onClick={(e) => dispatch({type:'SET_METHOD',payload: e.target.id})}
            style={{ backgroundColor:state.method === 'delete' ? 'gray' : '#ccc' }} id="delete"
          >DELETE</span>
        </label>
      </form>
    </>
  );
};

export default Form;