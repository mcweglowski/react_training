import './App.css';
import React, {useEffect} from 'react';

function App() {
  const source = [  
      { id: 1, title: "Title 1", body: "Message 1 body...", },
      { id: 2, title: "Title 2", body: "Message 2 body...", },
  ]

  setInterval(() => {
    const index = source.length + 1;
    source.push({
      id: index,
      title: `Title ${index}`,
      body: `Message ${index} body...`,
    });
  }, 5000)

  const [data, setData] = React.useState([...source]);
  const idInterval = React.useRef(0);

  



  function getData() {
    if (data.length !== source.length) {
      setData([...source]);
    } else {
      console.log("No need to update");
    }
  }

  useEffect(() => {
    idInterval.current = setInterval(() => getData(), 1000);

    return() => {
      clearInterval(idInterval.current);
    }}
  , [])

  const comments = data.map(comment => (
    <div key={comment.id}>
      <h4>{comment.title}</h4>
      <div>{comment.body}</div>
    </div>
  ));


  return (    
    <div className="App">
      {comments.reverse()}
    </div>
  );
}

export default App;
