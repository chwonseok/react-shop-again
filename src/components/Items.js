import './items.css';

function Items() {
  return (
    <div className="items">
      <div className="row">
        <div className="col">
          <img className="bike-1" alt="madone" />
          <h4>Madone</h4>
          <p>TREK, ₩1,000,000</p>
        </div>
        <div className="col">
          <img className="bike-2" src={'../img/madone.webp'} alt="xr4" />
          <h4>XR4</h4>
          <p>BIANCHI, ₩1,000,000</p>
        </div>
        <div className="col">
          <img className="bike-3" alt="dogma" />
          <h4>Dogma</h4>
          <p>PINARELLO, ₩1,000,000</p>
        </div>
      </div>
    </div>
  );
}

export default Items;
