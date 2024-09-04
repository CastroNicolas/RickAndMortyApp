/* eslint-disable react/prop-types */
import Card from '../../components/Card/Card';
import './Cards.css'

// eslint-disable-next-line react/prop-types
function Cards({ characters, onClose }) {
  return (
    <div className='Cards-body'>
    <div className="cards-container">
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
    </div>
  );
}

export default Cards;
