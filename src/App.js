import './App.css';
import Card from './components/Card'
import {I18nProvider, LOCALES} from "./i18n";
import data from './data/data';
import { useState } from 'react';


function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18nProvider locale={locale}>
      <button className='changeLanguage' onClick={() => setLocale(LOCALES.ITALIAN)}>Italian</button>
      <button className='changeLanguage' onClick={() => setLocale(LOCALES.ITALIAN)}>English</button>
      <div className="App">
        {data.map((elem,index)=>{
          return (
          <Card
          key={index}
          data={elem}
          />
        )})}
      </div>
    </I18nProvider>
  );
}

export default App;
