import CoreConcept from './CoreConcept';
import  {CORE_CONCEPTS}  from '../data.js';

const CoreConcepts = () => {

    const coreConcepts = CORE_CONCEPTS.map((obj) => {
        return (<CoreConcept key={obj.title} {...obj} />)
    })

    return (
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                {coreConcepts}
            </ul>
        </section>
    )
}

export default CoreConcepts;