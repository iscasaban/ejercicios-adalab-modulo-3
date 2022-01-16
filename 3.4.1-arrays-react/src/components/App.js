import '../styles/App.scss';

function App() {
  
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio'
  ];

  for (let index = 0; index < tasks.length; index++) {
    tasks.push(<li>{index}</li>)     
  }
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>
        <li>{tasks}</li>
      </ol>
    </div>
  );
}

export default App;
