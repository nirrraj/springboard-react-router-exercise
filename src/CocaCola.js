import { Link } from 'react-router-dom';

const CocaCola = () => {
  return (
    <div className='container'>
      <h1>🥤 Coca Cola</h1>
      <p>A refreshing can of coke!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default CocaCola;
