import React, { useState, useEffect } from 'react';


export default function FetchData2() {

  const [loading, setLoading] = useState(true);
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    //gthjer the data
    fetch('weatherforecast')
      .then((response) => response.json())
      .then(r => {
        setForecasts(r);
        setLoading(false);
      });

  }, []);

  //const handelMouseEnter  = (e) => {console.log(`mouse enter ${e}`)};
  const handelClick = param => () => { console.log(`click ${param}`) };

  return (
    <>
      <h1 id="tabelLabel" >Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>

      {loading ? <h1>Loading...</h1> :
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map((forecast) =>
              <tr key={forecast.date} onClick={ handelClick(forecast.date)}>
                <td>{forecast.date}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </>
  );
}

