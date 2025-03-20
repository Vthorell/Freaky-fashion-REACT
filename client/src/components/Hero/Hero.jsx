import './Hero.css';

const Hero = ({ hero }) => {

 

    return (
      <div>
      <section className="hero">
          <div className="herocontainer">
             <img src={hero.image} className="heroimg"></img>
             <h2 className="herotitle">{hero.title}</h2>
             <h4 className="heroinfo">{hero.info}</h4>
          </div>
      </section>
      <div className="container">
  <div className="comming-soon">
    <div className="image-wrapper">
      <img src="/images/byxor.jpg" alt="byxor" />
      <div className="text-overlay">Kommer snart</div>
    </div>
    <div className="image-wrapper">
      <img src="/images/byxor.jpg" alt="byxor" />
      <div className="text-overlay">Kommer snart</div>
    </div>
    <div className="image-wrapper">
      <img src="/images/byxor.jpg" alt="byxor" />
      <div className="text-overlay">Kommer snart</div>
    </div>
  </div>
</div>

      </div>
    )};
  
  export default Hero;