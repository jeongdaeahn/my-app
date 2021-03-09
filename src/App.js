import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const commnets = [
  { name: 'an'},
  { name: 'ok'},
  { name: 'park'}
];

function App() {
  return (
    <div className="App" style={{ padding:16, backgroundColor : 'pink'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {commnets.map((comment, index) => {
          return (
            <Comment
               name={comment.name} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
