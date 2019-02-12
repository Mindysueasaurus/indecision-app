console.log("app.js is running");

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['one, two']
}

const template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
    <ol>
      <li>Item one</li>
      <li>item 2</li>
    </ol>
  </div>
);
let count = 0;
const addOne = () => {
  console.log('addOne')
}
const templateTwo = (
  <div>
    <h1>Count: {count}
    </h1>
    <button onClick={addOne}>+1</button>
  </div>
)
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)