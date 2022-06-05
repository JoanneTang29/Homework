class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <p>Reviews</p>
        <h2>1,281</h2>
      </div>
    );
  }
}

class AverageRating extends React.Component {
  render() {
    return (
      <div className="rating">
        <p>Average Rating</p>
        <h2>4.6</h2>
      </div>
    );
  }
}

class SentimentAnalysis extends React.Component {
  render() {
    return (
      <div className="analysis">
        <p>Sentiment Analysis</p>
        <h2>960</h2>
        <h2>122</h2>
        <h2>321</h2>
      </div>
    );
  }
}

class WebsiteVisitors extends React.Component {
  render() {
    return (
      <div className="visitors">
        <p>Website Visitors</p>
        <h2>821</h2>
        <div className="visitorGraph"></div>
      </div>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <p>Dashboard</p>
        <p>Widget</p>
        <p>Reviews</p>
        <p>Customers</p>
        <p>Analysis</p>
        <p>Settings</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('main'));
