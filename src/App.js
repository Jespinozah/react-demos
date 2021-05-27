import logo from './logo.svg';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DownloadPage />
      </header>
    </div>
  );
}


const DownloadPage = () => {
  const downloadFile = () => {
    getDownloadFile()
      .then(blob => saveAs(blob, 'file.docx'));
      
  }
  
  return (
    <button className="App-link" type='button' onClick={downloadFile}>Download</button>
  )
}


export const getDownloadFile = async () => {
  return axios.get('http://localhost:3007/v1/memories/1/download', {
      responseType: 'blob',
  })
  .then(response => response.data)
}

export default App;
