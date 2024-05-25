import React from 'react';

const ResultsPage = ({ timetable }) => {
  return (
    <div>
      <h1>Timetable</h1>
      {timetable ? (
        <ul>
          {timetable.map((entry, index) => (
            <li key={index}>
              {entry.time} - {entry.details}
            </li>
          ))}
        </ul>
      ) : (
        <p>No timetable available</p>
      )}
    </div>
  );
};

export default ResultsPage;
