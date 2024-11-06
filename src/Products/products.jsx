import "../Products/products.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "../Events/components/button";

const Products = () => {
  return (
    <div>
      <section className="start-section">
        <div className="content-sect">
          <h1>Our Innovative Solutions</h1>
          <p>
            Explore the tech products we’ve designed and created with the goal
            to empower them and businesses.
          </p>
        </div>
      </section>

      <section className="expound-section">
        <div className="sub-sect">
          <img src="src/Products/assets/phone_img.png" alt="MamaPesa" />
          <div className="txt-sect">
            <h1>MamaPesa : Digital Wallet for the Future</h1>
            <p>
              Secure funding for your income-generating ventures and achieve
              economic resilience and independence with MamaPesa's dedicated
              platform. Say goodbye to financial barriers and hello to
              empowerment.
            </p>
            <Button className="learnmore-btn" variant="transparent">
              <i className="fa-solid fa-arrow-up-right-from-square"></i> Learn
              more
            </Button>
          </div>
        </div>
      </section>

      <section className="sokobeauty-section">
        <div className="sokobeauty-text">
          <h1>SokoBeauty: Empowering Beauty Entrepreneurs</h1>
          <p>
            A platform designed for beauticians to sell goods and services,
            while connecting them to clients.
          </p>
          <Button className="learnmore-btn-sect3" variant="transparent">
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Learn
            more
          </Button>
        </div>
        <div className="sokobeauty-heading">
          <h1>
            <span className="soko-white">Soko</span>
            <span className="beauty-red">Beauty</span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Products;
