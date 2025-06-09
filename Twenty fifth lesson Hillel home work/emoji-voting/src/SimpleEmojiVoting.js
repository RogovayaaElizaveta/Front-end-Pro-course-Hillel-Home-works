import React from "react";

class SimpleEmojiVoting extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      emojis: [ '😂', '😎', '😍'],
      votes: {}, 
      winner: null
    };


    this.voteEmoji = this.voteEmoji.bind(this);
    this.showWinner = this.showWinner.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  componentDidMount() {
    var savedVotes = localStorage.getItem("emojiVotes");
    if (savedVotes) {
      var votesObject = JSON.parse(savedVotes);
      this.setState({ votes: votesObject });
    }
  }

  voteEmoji(emoji) {

    var allVotes = this.state.votes;

    if (allVotes[emoji]) {
      allVotes[emoji] = allVotes[emoji] + 1;
    } else {
      allVotes[emoji] = 1;
    }

    this.setState({ votes: allVotes });
    localStorage.setItem("emojiVotes", JSON.stringify(allVotes));
  }

  showWinner() {
    var allVotes = this.state.votes;
    var max = 0;
    var bestEmoji = null;
    for (var key in allVotes) {
      if (allVotes[key] > max) {
        max = allVotes[key];
        bestEmoji = key;
      }
    }

    this.setState({ winner: bestEmoji });
  }

  clearAll() {

    localStorage.removeItem("emojiVotes");
    this.setState({ votes: {}, winner: null });
  }

  render() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Голосування за смайлик</h2>

        {}
        {this.state.emojis.map(function (emoji) {
          return (
            <div key={emoji} style={{ marginBottom: "15px" }}>
              <button onClick={this.voteEmoji.bind(this, emoji)} style={{ fontSize: "30px" }}>
                {emoji}
              </button>
              <div>Голосів: {this.state.votes[emoji] || 0}</div>
            </div>
          );
        }, this)}

        {}
        <div style={{ marginTop: "20px" }}>
          <button onClick={this.showWinner}>Show Results</button>
          <button onClick={this.clearAll} style={{ marginLeft: "10px" }}>
            Очистити результати
          </button>
        </div>

        {}
        {this.state.winner && (
          <div style={{ marginTop: "20px", fontSize: "24px" }}>
            🏆 Переможець: {this.state.winner}
          </div>
        )}
      </div>
    );
  }
}

export default SimpleEmojiVoting;

