const visibility = {
  title: 'Visibility Toggle',
  visible: true
}






const appRoot = document.getElementById('app')



const render = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1> 
      <button onClick={onRemoveAll}>Remove All</button>
  
    </div>
  );
  ReactDOM.render(visible, appRoot)
}

render()