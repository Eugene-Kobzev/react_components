import './App.css';
import Layout from 'components/common/Layout/Layout';
import FakeStore from 'pages/FakeStore/FakeStore';
import DnDInput from 'pages/DnDInput/DnDInput';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FakeStore />} />
        <Route path="/dndinput" element={<DnDInput />} />
      </Routes>
    </Layout>


  );
}

export default App;