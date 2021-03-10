import React from 'react';
import { useQuery, gql} from '@apollo/client';

const All_STARSHIPS = gql`
  {
    allStarships{
      id
      name
    }
  }
`;

function App() {

  const {loading, error, data} = useQuery(All_STARSHIPS);

  if(loading) return <p>Loading ...</p>
  if(error) return <p> Whoops ... something is wrong!</p>

  return (
    <>
      <h2>Star Wars Spaceships {' '}
        <span role='img' aria-label='spaceships'>
          :rocket:
        </span>
      </h2>
      {data.allStarships.map((starship, id) => (
        <p key={id}>
          {starship.name}
        </p>
      ))}
    </>
  );
}

export default App;
