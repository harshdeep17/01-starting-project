import Header from './components/Header'
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';


function App() {
  const coreConcepts=CORE_CONCEPTS.map((obj)=>{
    return (<CoreConcept {...obj}/>)
    })
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
        <ul>
          {coreConcepts}
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;