import Header from './components/header/Header'
import CoreConcept from './components/CoreConcept';
import { EXAMPLES,CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';
import { useEffect, useState } from 'react';


function App() {
  const [selectedTopic,setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton)
  }

  useEffect(() => {
    console.log(selectedTopic);
},[selectedTopic]);

  const coreConcepts=CORE_CONCEPTS.map((obj)=>{
    return (<CoreConcept key={obj.title} {...obj}/>)
    })

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          {coreConcepts}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={handleSelect.bind(null,'components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={handleSelect.bind(null,'jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={handleSelect.bind(null,'props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={handleSelect.bind(null,'state')}>State</TabButton>
        </menu>
        {!selectedTopic && <p>please select a topic</p>}
            {selectedTopic && <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic]?.title}</h3>
              <p>{EXAMPLES[selectedTopic]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic]?.code}</code>
              </pre>

            </div>}
        </section>
      </main>
    </div>
  );
}

export default App;