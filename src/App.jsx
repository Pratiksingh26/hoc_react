
import './App.css';
import Hocg from "./components/Green"
import Hocr from "./components/Red"
import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
     <Hocr cmp={Counter} />
     <Hocg cmp={Counter} />
    </div>
  );
}

export default App;




