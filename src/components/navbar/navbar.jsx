import './navbar.css'
  
const Navbar = () =>
{
  const handleClickScroll = (value) => {
  const element = document.getElementById(value);
  console.log(value);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
     return (
        <div class="navbar ">
  <div className="navbar ">
 
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><a onClick={() => handleClickScroll('home')}>Home</a></li>
      <li><a onClick={() => handleClickScroll('skills')}>Skills</a></li>
      <li><a onClick={() => handleClickScroll('education')}>Education & Certifications</a></li>
      <li><a onClick={() => handleClickScroll('contact')}>Contact Me</a></li>
    </ul>
  </div>
</div>
</div>)
};
 export default Navbar