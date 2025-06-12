import React, { useState } from 'react'; 
import './App.css'; 

function SimpleEmojiVt() {
  const [emojis, setEmojis] = useState([
    { id: 1, symbol: '😃', votes: 0 },
    { id: 2, symbol: '😊', votes: 0 },
    { id: 3, symbol: '😎', votes: 0 },
    { id: 4, symbol: '🤩', votes: 0 },
    { id: 5, symbol: '😍', votes: 0 },
  ]);

  const [showResults, setShowResults] = useState(false);


  function vote(id) {
    const updatedEmojis = emojis.map((emoji) => {
      if (emoji.id === id) {
        return { ...emoji, votes: emoji.votes + 1 };
      }
      return emoji;
    });
    setEmojis(updatedEmojis);
  }

  // Знаходження переможця 
  function getWinner() {
    let maxVotes = 0;
    let winner = emojis[0];
    for (let i = 0; i < emojis.length; i++) {
      if (emojis[i].votes > maxVotes) {
        maxVotes = emojis[i].votes;
        winner = emojis[i];
      }
    }
    return winner;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Голосування за найкращий смайлик</h2>

      {/* Вивід усіх смайликів */}
      <div>
        {emojis.map((emoji) => (
          <button
            key={emoji.id}
            onClick={() => vote(emoji.id)}
            style={{ fontSize: '2rem', margin: '10px', cursor: 'pointer' }}
          >
            {emoji.symbol}
            <div>{emoji.votes}</div>
          </button>
        ))}
      </div>

      {}
      <button
        onClick={() => setShowResults(true)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Show Results
      </button>

      {}
      {showResults && (
        <div style={{ marginTop: '30px' }}>
          <h3>Результати голосування:</h3>
          <p>Переможець: {getWinner().symbol}</p>
          <p>Кількість голосів: {getWinner().votes}</p>
        </div>
      )}
    </div>
  );
}

export default SimpleEmojiVt;