import React, { useEffect, useState } from 'react';
//import axios from 'axios';

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
    setLoading(true);
    // mock output
      // const data = {
      //   count: 2,
      //   results: [
      //     { name: 'fake thing 1', url: 'http://fakethings.com/1' },
      //     { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      //   ],
      // };
      setData(data);
      setRequestParams('requestParams');
      setLoading(false);
  }

 
  ////useEffect(() => {
  // axios(requestParams)
  // .then(response =>setData(response.data.results));
  // }, [requestParams]);






    return (
      <>
     
        <Header />
        <div className='method'>Request Method: {requestParams.method}</div>
        <div className='method'>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} loading={loading} />
        <Footer />
      
      </>
    );  
  }

export default App;