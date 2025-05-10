import React from 'react';

const Main = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className='movie' key={imdbID}>
      <div>
        <p className="p">{Year}</p>
      </div>

      <div>
        <img className='notfoundimg' src={Poster !== "N/A" ? Poster : "https://bitsofco.de/img/Qo5mfYDE5v-350.png"} alt={Title}/>
      </div>

      <div>
        <h3 >{Title}</h3>
        <p>{Year}</p>

      </div>

    </div>
  );
}
export default Main;