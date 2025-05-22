// import './App.css';
// import React, { useState } from "react"
// import Form from './components/Form';
// import ShowList from './components/ShowList';
// // i've clearly borrowed heavily from Christina's example. for some reason i thought it was all done in one page like the first video title on the assignment page. guess i'll have to watch that and find out how they did it. in any event, this needed finishing so here it is.
// function App() {
//     const [stuff, setStuff] = useState([])

//     return (
//         <div className="App">
//             <Form stuff={stuff} setStuff={setStuff} />
//             <ShowList stuff={stuff} setStuff={setStuff} />
//         </div>
//     );
// }

// export default App;
import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import ShowList from './components/ShowList';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// adjust the path to your Amplify config file
import outputs from '../amplify_outputs.json';

// Configure Amplify with your backend settings
Amplify.configure(outputs);

function App() {
    const [stuff, setStuff] = useState([]);

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div className="App">
                    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <h2>Welcome, {user?.username}</h2>
                        <button onClick={signOut}>Sign Out</button>
                    </header>

                    <Form stuff={stuff} setStuff={setStuff} />
                    <ShowList stuff={stuff} setStuff={setStuff} />
                </div>
            )}
        </Authenticator>
    );
}

export default App;
