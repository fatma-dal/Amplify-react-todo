import './App.css';
import React, {useState} from "react"
import Form from './components/Form';
import ShowList from './components/ShowList';
// i've clearly borrowed heavily from Christina's example. for some reason i thought it was all done in one page like the first video title on the assignment page. guess i'll have to watch that and find out how they did it. in any event, this needed finishing so here it is.
function App() {
    const [stuff, setStuff] = useState([])

    return (
        <div className="App">
            <Form stuff = {stuff} setStuff={setStuff} />
            <ShowList stuff = {stuff} setStuff={setStuff} />
        </div>
    );
}

export default App;