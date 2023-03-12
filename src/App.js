import spons from './spons'
import List from './List'

function App() {
  return (
    <div>
      <div className='title'>
        <img src="C:\Users\HP\Desktop\web_development\sponsor_page\src\assets/SpringSpree_logo.png" alt="" />
        <h1>Thank you to our sponsors</h1>
        <img src="" alt="" />
      </div>
      <List spons={spons}/>
    </div>
  );
}

export default App;
