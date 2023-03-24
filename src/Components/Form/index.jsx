import { useReducer,useState } from 'react';
import './Form.scss';

let history = [];

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
const [history, setHistory] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method : state.method,
      url: state.url,
      data: state.data,

    };

    if (state.url !== '') {
      const newHistory = [...history, state.url];
      setHistory(newHistory);
      console.log('history url pushed: ', newHistory);
      let item = JSON.stringify(newHistory);
      localStorage.setItem('history', item);
    }
    


    
    props.handleApiCall(formData);
  }

  const changeUrl = (e) => dispatch({type:'SET_URL',payload: e.target.value});

  const getHistory = () => {
    const history = JSON.parse(localStorage.getItem('history'));
    if (history) {
      return history.map((item, idx) => (
        <li key={idx} onClick={() => props.handleApiCall(item)}>

{/* {item.method} {item.url} {item.data} */}
      
          
        </li>
      ));
    }
  }
  
  
        
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

        <div className="history">
          <button id="getHistory" onClick={getHistory}>
            <option>history</option>
          </button>
          <ul>
            {history.map((item, idx) => (
              <li key={idx} onClick={() => props.handleApiCall({ method: 'get', url: item, data: '' })}>
                {item}
              </li>
            ))}
          </ul>
        </div>

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