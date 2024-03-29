const aboutText = `I am an experienced full stack engineer skilled with NodeJS and Elixir in production. I am a military veteran and Computer Science graduate who is always ready for the next challenge.`

const About = () => (
  <div id="about" className="bg-teal-500 p-8 flex flex-wrap items-center justify-center">
    <div className="max-w-md">
      <img className="h-full w-full rounded-full" src="img/jose.jpg"></img>
      <p className="pt-6 text-white text-xl leading-snug font-serif">{ aboutText }</p>
    </div>
  </div>
)

export default About
