import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

const CoreConcept = (props) => {
  return (
    <li>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  const coreConcept=CORE_CONCEPTS.map((obj)=>{
    return (<CoreConcept {...obj}/>)
    })
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
        <ul>
          {coreConcept}
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;