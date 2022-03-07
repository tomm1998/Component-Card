import './App.css';
import Card from './components/Card'


function App() {


  const images = ['https://lapierre-shopware.accell.cloud/thumbnail/76/f3/dc/1604483174/eSensium%20300%20D062%20(1)_800x800.png', 'https://st.depositphotos.com/1503367/3042/i/600/depositphotos_30421475-stock-photo-bicycle.jpg'];
  return (
    <div className="App">
      <Card
        brand='CANNONDALE'
        year='2019'
        title='ADVENTURE NEO 1 EQ'
        type='CORSA'
        size='S M L XL'
        colors='+4'
        rating='3'
        numReview='8560'
        newOrOld='Usato'
        priceDiscount='€3.299,00'
        price='€3.299,00'
        images={images}
        body='Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna' />
    </div>
  );
}

export default App;
