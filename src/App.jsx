import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);


  const callApi = (requestParams) => {
    // mock output

    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(data);
    setRequestParams(requestParams);
  }

  useEffect(() => {
    const getData = async () => {
      if(requestParams.method && requestParams.url){
        setLoading(true);
        const response = await axios(requestParams);
        const data = response.data;
        setData(data);
        setLoading(false);
      }
    }
    getData();
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method ? requestParams.method.toUpperCase() : ''}</div>
      <div>URL: {requestParams.url}</div>
      <div>Data: {requestParams.data}</div>

      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;