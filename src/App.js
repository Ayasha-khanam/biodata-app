
import './App.css';
import Biodata from './components/Biodata'
function App() {
  return (
    <div className="BioApp">
      
      <Biodata
      name="satu vai"
      email="abc@gmail.com"
      phone="01677866788"
      facebook="facebook/sr satu"
      github="github/srsatu"
      linkedIn="linkedin/srsatu"
      skills={['js','node']}
      Interests={['keyboar','alg']}
      />
    </div>
  );
}

export default App;
