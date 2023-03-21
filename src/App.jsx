import React, { useState } from 'react';


import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';



const App =() => {

 let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    // mock output
    //   data = {
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
    //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    //   ],
    // };
setData(data);
setRequestParams(requestParams);
  }


    return (
      <>
     
        <Header />
        <div className='method'>Request Method: {requestParams.method}</div>
        <div className='method'>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );  
  }

export default App;