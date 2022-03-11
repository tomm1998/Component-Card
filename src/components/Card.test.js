import { render, screen, fireEvent} from '@testing-library/react';
import { I18nProvider } from '../i18n';
import { LOCALES } from '../i18n';
import Card from './Card'

const data =     {
  id: 1,
  brand: 'CANNONDALE',
  year: '2019',
  title: 'ADVENTURE NEO 1 EQ',
  type: 'CORSA',
  size: 'S M L XL',
  colors: ['red', 'blue', 'green'],
  reviews: [{rating: 3, review: 'grandissima bici'}, {rating: 4, review: ''}, {rating: 3, review: "buona bici"}],
  newOrOld: 'USATO',
  price: '3290',
  discount: '3000,00',
  images: ['https://lapierre-shopware.accell.cloud/thumbnail/76/f3/dc/1604483174/eSensium%20300%20D062%20(1)_800x800.png', 'https://st.depositphotos.com/1503367/3042/i/600/depositphotos_30421475-stock-photo-bicycle.jpg'],
  description: 'Una bici elettrica ideale per andare al lavoro o per godersi le caratteristiche stradine di campagna'
}

test('renders correctly', () => {
  render(<I18nProvider locale={LOCALES.ITALIAN}><Card data={data}/></I18nProvider>);
});

test('like clicked', () => {
  render(<I18nProvider locale={LOCALES.ITALIAN}><Card data={data}/></I18nProvider>);
  const unlike = screen.getByTestId('unlike');
  fireEvent.click(unlike);
  expect(screen.getByTestId('like')).toBeInTheDocument();
});

test('next-image index increment', () => {
  render(<I18nProvider locale={LOCALES.ITALIAN}><Card data={data}/></I18nProvider>);
  const next = screen.getByTestId('next-image');
  fireEvent.click(next);
  expect(screen.getByTestId('index-slider').textContent).toBe("1");
});

test('prev-image index decrement', () => {
  render(<I18nProvider locale={LOCALES.ITALIAN}><Card data={data}/></I18nProvider>);
  const prev = screen.getByTestId('prev-image');
  fireEvent.click(prev);
  expect(screen.getByTestId('index-slider').textContent).toBe(String(data.images.length-1));
});


