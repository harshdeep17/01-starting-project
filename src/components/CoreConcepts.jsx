import CoreConcept from './CoreConcept';
import  {CORE_CONCEPTS}  from '../data.js';
import Section from './Section.jsx';

const CoreConcepts = () => {

    const coreConcepts = CORE_CONCEPTS.map((obj) => {
        return (<CoreConcept key={obj.title} {...obj} />)
    })

    return (
        <Section title="Core Concepts" id="core-concepts">
            <ul>
                {coreConcepts}
            </ul>
        </Section>
    )
}

export default CoreConcepts;