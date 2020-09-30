const aboutText = `I am a military veteran and Computer Science graduate who took the scenic route into web development.
  I have always had a passion for learning and problem solving, and I thrive with the challenges that programming provides.
  In my free time, I enjoy hanging out with my wife and cats, tinkering with home automation, very amateur woodworking, and playing video games.`

const About = () => (
  <div id="about" className="bg-teal-500 p-8 flex flex-wrap items-center justify-center">
    <div className="max-w-md">
      <img className="h-full w-full rounded-full" src="img/jose.jpg"></img>
      <p className="pt-6 text-white text-xl leading-snug font-serif">{ aboutText }</p>
    </div>
  </div>
)

export default About