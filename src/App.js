import logo from './logo.svg';
import './App.css';
import Problem1 from './COMP/Problem1';
import Problem2_1 from './COMP/Problem2_1';
import Problem2_2 from './COMP/Problem2_2';
import Problem2_3 from './COMP/Problem2_3';
import Problem2_4 from './COMP/Problem2_4';
import Problem2_5 from './COMP/Problem2_5';
import Problem2_6 from './COMP/Problem2_6';
import Problem2_7 from './COMP/Problem2_7';
import Problem2_8 from './COMP/Problem2_8';
import { Problem3 } from './COMP/Problem3';

function App() {
  return (
    <>
      <div >
        <Problem1/>
      </div >
      <hr/>
      <hr/>
      <div className='BUTTON'>
        <Problem2_1/>
        <Problem2_2/>
        <Problem2_3/>
        <Problem2_4/>
        <Problem2_5/>
        <Problem2_6/>
        <Problem2_7/>
        <Problem2_8/>
      </div>
      <hr></hr>
      <hr></hr>
      <div className='BUTTON'>
        <Problem3 val={"JOIN US"}/>
        <Problem3 val={"SETTINGS"}/>
        <Problem3 val={"LOGIN"}/>
        <Problem3 val={"CONTACT US"}/>
        <Problem3 val={"SEARCH"}/>
        <Problem3 val={"HELP"}/>
        <Problem3 val={"HOME"}/>
        <Problem3 val={"DOWNLOAD"}/>
      </div>
    </>
    
  );
}

export default App;
