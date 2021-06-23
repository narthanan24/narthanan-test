import './App.css';
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <Movie
          year={1999}
          genre={"Sci-Fi"}
          title={"Matrix"}
          description={`A Computer hacker learns from mysterious rebels about the true nature of his 
          reality and his role in the war against its controllers`}
      />
    </div>
  );
}

export default App;
