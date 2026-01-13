import logo from './logo.svg';
import './App.css';
import { getPalette, getRandomPalette } from './shared/colorPaletteGenerator'
import { HoverColorLetters } from './components/hoverColorLetters/hoverColorLetters';
import { Header } from './components/header/header.component';
import { Container2 } from './components/main_page/container2/container2.component';
import { Container3 } from './components/main_page/container3/container3.component';
import { Container4 } from './components/main_page/container4/container4.component';
import { Container5 } from './components/main_page/container5/container5.component';

function App() {
  console.log('r', getRandomPalette())
  console.log(getPalette('#1a5e63'))
  return (
    <div className="App">
      <Header />
      <Container2/>
      <Container3/>
      <Container4/>
      <Container5/>
    </div>
  );
}

export default App;
