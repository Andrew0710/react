import './App.css';
import { HeaderComponent, ItemsComponent } from './components'

function App() {
  return (
    <>
    <div className='Page'>
      <div className='top'>
        <HeaderComponent />
      </div >

      <div className='bottom'>
        <ItemsComponent />
      </div>
    </div> 
    </>
  );
}

export default App;
