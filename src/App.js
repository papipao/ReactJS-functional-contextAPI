import './App.css';
import ContextComponent from './components/functional/contexApi/ContextComponent';
import ContextProvider from './components/functional/contexApi/ContextProvider';

function App() {
  return (
    <div className='container'>
      <ContextProvider>
        <ContextComponent />
      </ContextProvider>
    </div>
  );
}

export default App;
