import { useEffect, useReducer } from 'react'
import axios from 'axios'

import './App.scss'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Components/Form'
import Results from './Components/Results'

const initialState = {
  data: null,
  requestParams: {},
  loading: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload }
    case 'SET_REQUESTPARAMS':
      return { ...state, requestParams: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

const App = () => {
  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState)

  const callApi = requestParams => {
    // mock output

    // const data = {
    //   count: 2,
    //   results: [
    //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
    //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
    //   ],
    // };
    //dispatch({type: 'SET_DATA',payload:data});
    dispatch({ type: 'SET_REQUESTPARAMS', payload: requestParams })
  }

  useEffect(() => {
    const getData = async () => {
      if (state.requestParams.method && state.requestParams.url) {
        dispatch({ type: 'SET_LOADING', payload: true })
        const response = await axios(state.requestParams)
        const data = response.data
        // setData(data);
        // setLoading(false);
        dispatch({ type: 'SET_DATA', payload: data })
        // dispatch({type:'SET_REQUESTPARAMS', payload:requestParams})
        dispatch({ type: 'SET_LOADING', payload: false })
      }
    }
    getData()
  }, [state.requestParams])

  return (
    <>
      <Header />
      <div>
        Request Method:{' '}
        {state.requestParams.method
          ? state.requestParams.method.toUpperCase()
          : ''}
      </div>
      <div>URL: {state.requestParams.url}</div>
      <div>Data: {state.requestParams.data}</div>

      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </>
  )
}

export default App
