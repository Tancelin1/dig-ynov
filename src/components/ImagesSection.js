import '../assets/ImagesSection.css';

function ImagesSection() {
  return (
    <section>
<h1> Notre Premiere réalisation</h1>
<div className="images-wrapper">
      <div className="left-col">
        <div className="top-row">
          <img src="/ynov-croix.png" alt="ynov-croix" className="img-half" />
          <img src="/ynov-croix-exterieur.png" alt="ynov-croix-exterieur" className="img-half" />
        </div>

        <div className="centered-bottom">
          <img src="/plan-teia.png" alt="plan-teia" className="img-bottom" />
        </div>
      </div>
      <div className="right-col">
        <img src="carte-france.jpg" alt="img5" className="img-big" />
      </div>
</div>
    </section>
  );
}

export default ImagesSection;
