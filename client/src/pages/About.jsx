import hospitalAbout from '../images/hospital-about.jpg';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-4xl'>About</h2>
      <div className='flex justify-evenly items-center p-8 w-full'>
        <img src={hospitalAbout} alt='A Hospital' height='300' width='400' className='max-w-full h-auto rounded-md'/>
        <p className='max-w-48 overflow-hidden text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita nam impedit culpa quis iusto error sapiente recusandae amet rerum totam similique unde, maxime eveniet, voluptatibus nihil debitis? Animi, recusandae!
        Laboriosam error dolore aliquid unde nihil sunt rem consequuntur, deleniti modi necessitatibus cumque est quod possimus non? Exercitationem qui similique voluptate, doloribus id nemo quibusdam nesciunt laborum fugiat! Eligendi, expedita.0</p>
      </div>
    </div>
  )
}

export default About