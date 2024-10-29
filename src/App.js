import './App.css';
import Effect from './components/Effect';
import Memo from './components/Memo';
import Reducer from './components/Reducer';
import State from "./components/State"
import Ref from "./components/Ref"
import Context from "./components/Context"
import CallBack from './components/Callback/CallBack';
import LayoutEffect from './components/LayoutEffect/LayoutEffect';
import ModalExample from './components/LayoutEffect/ModalExample';


function App() {
  return (
    <>
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center" }}>React Hooks</h1>
        <div className="hooksContainer" style={{ display: "flex" ,backgroundColor:"whitesmoke",padding:"10px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
          <div style={{ width: "30vw", textAlign:"left"}}>
            <State />
          </div>
          <div style={{ width: "30vw" ,textAlign:"center"}}>
            <Reducer />
          </div>
          <div style={{ width: "30vw",textAlign:'right' }}>
            <Effect />
          </div>  
        </div>
        <div className="hooksContainer" style={{ display: "flex",backgroundColor:"whitesmoke",padding:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px" }}>
          <div style={{ width: "30vw", textAlign:"left"}}>
            <Memo />
          </div>
          <div style={{ width: "30vw" ,textAlign:"center"}}>
            <Ref/>
          </div>
          <div style={{ width: "30vw",textAlign:'right' }}>
            <Context/>
          </div>
          
        </div>
        <div className="hooksContainer" style={{ display: "flex",backgroundColor:"whitesmoke",padding:"10px",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px" }}>
          <div style={{ width: "30vw", textAlign:"left"}}>
            <CallBack/>
          </div>
          <div style={{ width: "30vw" ,textAlign:"center"}}>
            <LayoutEffect/>
          </div>
          <div style={{ width: "30vw" ,textAlign:"center"}}>
             <ModalExample/>
          </div>
        
          
        </div>

      </div>

   {/* <ModalExample/> */}
    </>
  );
}

export default App;
