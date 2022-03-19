// import './App.css';
import { AppUI } from './AppUI'
import { FormProvider } from '../Context/Context'

function App() {
  return (
    <FormProvider>
      <AppUI/>
    </FormProvider>
  );
}

export default App;
