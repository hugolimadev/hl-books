import './App.css';
import Logo from './components/logo/index'
import iconesHeader from './components/iconesHeader/indeex'
import opcoesHeader from './components/opcoesHeader'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo> </Logo>
        <opcoesHeader> </opcoesHeader>
        <iconesHeader></iconesHeader>
      </header>
    </div >
  );
}

export default App
