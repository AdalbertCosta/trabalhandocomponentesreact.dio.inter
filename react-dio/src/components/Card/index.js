import{ useState} from 'react';
import Button from '../Button';

const Card = () => {

  const [valor, setValor] = useState(0)

  function Adicionar(){
    setValor(valor + 1);
  }

  function Remover(){
    setValor(valor - 1);
  }

  function Multiplicar(){
    setValor(valor * 3);
  }
  
  return (
    <div  classeName="card">
      <div classeName="card-header">Meu primeiro card</div>
      <div classeName="card-body">
    
        <Button  className="btn btn-success m-1" onClick={Adicionar}>Adicionar</Button>
        <Button  className="btn btn-danger m-1"  onClick={Remover}>Remover</Button>
        <Button  className="btn btn-success m-1" onClick={Multiplicar}>Multiplicar</Button>
       
        
        <span class="border border-5">{valor}</span>
      </div>
    </div>
  )
}

export default Card
