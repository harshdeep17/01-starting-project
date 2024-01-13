import TabButton from './TabButton';
import {EXAMPLES} from '../data.js'
import { useEffect, useState } from 'react';

const Examples = () =>{

    const [selectedTopic,setSelectedTopic] = useState();
    const handleSelect = (selectedButton) => {
      setSelectedTopic(selectedButton)
    }
  
    useEffect(() => {
      console.log(selectedTopic);
  },[selectedTopic]);  

    return (
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
    )
}

export default Examples;