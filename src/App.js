import logo from './logo.svg';
import './App.css';
import Card from './components/Card'


function App() {
  return (
    <div className="App">
      <Card
        title='Card Title'
        imageUrl='https://lapierre-shopware.accell.cloud/thumbnail/76/f3/dc/1604483174/eSensium%20300%20D062%20(1)_800x800.png'
        body='Prova' />
    </div>
  );
}

export default App;
