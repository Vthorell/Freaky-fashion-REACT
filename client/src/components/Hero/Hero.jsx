import './Hero.css';

const Hero = ({ hero }) => {

 

    return (
      <section className="hero">
          <div className="herocontainer">
             <img src={hero.image} className="heroimg"></img>
             <h2 className="herotitle">{hero.title}</h2>
             <h4 className="heroinfo">{hero.info}</h4>
          </div>
      </section>
    )};
  
  export default Hero;