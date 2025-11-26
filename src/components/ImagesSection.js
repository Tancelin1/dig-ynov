function ImagesSection() {
  return (
    <section>
<h1> Notre Premiere réalisation</h1>
<div className="images-wrapper">
      <div className="left-col">
        <div className="top-row">
          <img src="/img1.jpg" alt="img1" className="img-half" />
          <img src="/img2.jpg" alt="img2" className="img-half" />
        </div>

        <div className="centered-bottom">
          <img src="/img3.jpg" alt="img3" className="img-bottom" />
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
