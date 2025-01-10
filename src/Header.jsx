
import headerPhoto from './headerPhoto.jpeg'; // Import your image

function Header() {
  return (
    <div
      id="websiteHeader"
      style={{
        backgroundImage: `url(${headerPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Total bill Website</h1>
    </div>
  );
}

export default Header;
