import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';

const booksData = [
  { title: 'Harry Potter', description: 'My first book.' },
  { title: 'The Bible', description: 'Most important book.' },
  { title: 'Programing with JS', description: 'Js programing for dummyes' }
];

function App() {
  return (
    <div className="site-wrapper">
      <Heading />
      <Counter />
      <BookList books={booksData} />

    </div>
  );
}

export default App;
