const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 relative">
        <img src="https://i.ibb.co/0tj8j4d/person.png" className="w-3/4 rounded-lg shadow-2xl"/>
        <img src="https://i.ibb.co/jvgmyd1/person-1.png" className="w-1/2 border-8 border-white absolute right-5 top-1/2 rounded-lg shadow-2xl"/>
        </div>
        <div className="md:w-1/2">
            <p className="text-xl font-bold text-red-500 mb-5">About us</p>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br />
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  
          </p>
          <button className="btn bg-red-500">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
