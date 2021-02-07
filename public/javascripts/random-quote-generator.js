const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {
  state = {
    quotes: [
      {
        quote:"Life isn’t about getting and having, it’s about giving and being.",
        author:"Kevin Kruse"
      }
    ],
    index: 0
  };

  componentDidMount() {
    // call the API and update state
    fetch(API).then(res => res.json())
      .then(res => {
        this.setState({
          quotes: res.quotes
        }, this.getRandomIndex);
    })
  };

  getRandomIndex = () => {
    const {quotes} = this.state;

    if(quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index
      })
    }
  }

  render() {
    const {quotes, index} = this.state;
    const quote = quotes[index];
    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
    return (
      <div id="quote-box">
        <div class="container">
          {
            quote && (
              <div className="quote">
                <p id="quote">"{quote.quote}"</p>
                <p id="author">- {quote.author}</p>
              </div>
            )
          }
          <div id="button-box">
            <a id="tweet-quote" className="btn-a" target="_blank" href={tweetURL}>
              <i className="fab fa-twitter"></i> Tweet
            </a>
            <button id="new-quote" className="btn" onClick={this.getRandomIndex}>
              <i className="fas fa-random"></i> Get Quote
            </button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
