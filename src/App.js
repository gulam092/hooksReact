import logo from './logo.svg';
import './App.css';
import USComponent from './USComponent';
import USWithObject from './USWithObject';
import USWithArray from './USWithArray';
import ClassState from './ClassState';
import FunctionState from './FunctionState';
import FunctionEffect from './FunctionEffect';
import { CompA } from './CompA';
import { createContext } from 'react';
import ControlledForm from './ControlledForm';
import ControlledFunction from './ControlledFunction';
import MultipleInput from './MultipleInput';
import FunctionInput from './FunctionInput';
import OtherInputs from './OtherInputs';
import MultiCheckBox from './MultiCheckBox';
import ReferenceComponent from './ReferenceComponent';
import UnControlled from './UnControlled';
export const  NameContext  =createContext()
export const AgeContext  = createContext()
 function App() {
  return (
    <div className="App">
     {/* <ClassState/> */}
 {/* <FunctionState></FunctionState> */}
 {/* <FunctionEffect></FunctionEffect> */}
 
{/* <NameContext.Provider value={'Gulam'}>
  <AgeContext.Provider value={67}>
<CompA></CompA>
</AgeContext.Provider>
</NameContext.Provider> */}

 {/* <ControlledFunction> </ControlledFunction> */}
 {/* <MultipleInput></MultipleInput> */}
  {/* <FunctionInput></FunctionInput> */}
  {/* <OtherInputs></OtherInputs> */}
  {/* <MultiCheckBox></MultiCheckBox> */}
  {/* <ReferenceComponent></ReferenceComponent> */}
 <UnControlled></UnControlled>
     </div>
  );
}

export default App;
