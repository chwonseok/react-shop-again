import './items.css';

function Items() {
  return (
    <div className="items">
      <div className="row">
        <div className="col">
          <img
            className="bike-1"
            src="https://d2yn9m4p3q9iyv.cloudfront.net/trek/2021/madone-slr-6-etap/thumbs/1000/b2e0e.jpeg"
            alt="madone"
          />
          <h4>Madone</h4>
          <p>TREK, ₩1,000,000</p>
        </div>
        <div className="col">
          <img
            className="bike-2"
            src="https://www.bianchi.sk/uploads/image_bank/38670-cestny-karbonovy-bicykel-bianchi-oltre-xr4-disc-super-record-eps-12sp-52-36-v.jpg"
            alt="xr4"
          />
          <h4>XR4</h4>
          <p>BIANCHI, ₩1,000,000</p>
        </div>
        <div className="col">
          <img
            className="bike-3"
            src="https://cdn.shopify.com/s/files/1/0008/9738/4508/products/veniceblue_1000x1000.png?v=1600961656"
            alt="dogma"
          />
          <h4>Dogma</h4>
          <p>PINARELLO, ₩1,000,000</p>
        </div>
      </div>
    </div>
  );
}

export default Items;
