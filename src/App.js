
import "./App.css";
import Questions from "./components/Questions";
import InterviewAccord from "./components/InterviewAccord";
import data from "./helpers/data";
import Header from "./components/Header";




function App() {
  
  return (
    <div className="App">
    <Header/>
      <Questions data={data}/>
    
    </div>
  );
}

export default App;
