  import React from"react";
import"./index.css";
import logo from "./assets/logo.svg";
import featured from "./assets/all-encores.jpg";
import album2 from "./assets/blurred.jpg";
import album3 from "./assets/encores-2.jpg";
import album4 from "./assets/the-cell.jpg";
import album5 from "./assets/eulogy-for-evolution.jpg";
import authorpicture from "./assets/profile_picture.jpg";
import icon1 from "./assets/facebook-icon.png";
import icon2 from "./assets/twitter-icon.png";
import icon3 from "./assets/instagram-icon.svg";


function App(){
  const currentYear = new Date().getFullYear();
  return(
    <><div className="wrapper">
        <div className="top">
          <img src={logo} alt="logo" className="logo"/>
        </div>
      </div>
      <nav className="menu">
        <a href="#blog">Our blog</a>
        <a href="#artist">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
      <div className="container">
        <article className="article">
        <h1 className="title">Erased Tapes:</h1>
        <h2 className="subtitle">Exploring the Sonic Frontier</h2>
        <p className="intro">Erased Tapes is an independent record label based in London, UK. Founded in 2007 by Robert Raths, the label has become known for its diverse roster of artists and its commitment to pushing the boundaries of contemporary music.</p>
        <div className="columns">
    <h2>Our Story</h2>
    <p>Erased Tapes Records is an independent record label founded in London in 2007 by Robert Raths. The label was created to support musicians with original ideas and to give their work a place to be heard. Rather than focusing on one particular style of music, Erased Tapes explores a wide range of sounds, from contemporary classical compositions to experimental electronic music.

One of the most interesting things about the label is its commitment to creativity and artistic freedom. It encourages artists to experiment with new techniques, explore unusual sounds and develop their own musical identities. This approach allows musicians to create work that feels personal, expressive and different from mainstream music.

Over the years, Erased Tapes has developed an international community of musicians and listeners. Its releases demonstrate how music can bring together different influences and create something completely new. The label continues to introduce listeners to fresh ideas and sounds that might otherwise remain undiscovered.</p>
    <h2>Our Artists</h2>
    <p>The artists are at the heart of Erased Tapes Records. Each musician brings a unique perspective, combining different instruments, techniques and influences to create an individual sound. The label works with artists who are willing to explore new musical possibilities rather than follow familiar patterns.

Nils Frahm is known for his expressive piano compositions and his creative use of electronic equipment. Ólafur Arnalds combines classical influences with modern production, creating atmospheric and emotional music. Rival Consoles explores electronic sounds through detailed rhythms, textures and layers, while Kiasmos blends melodic electronic music with minimalist influences.

Although these artists have different styles, their work shares a curiosity for experimentation. Some recordings are quiet and reflective, while others are rhythmic and energetic. Together, they demonstrate that music does not need to fit into a single genre to connect with an audience.</p>
    <h2>Our Blog</h2>
    <p>Since its beginning in 2007, Erased Tapes Records has grown from an independent label into a recognised platform for innovative musicians. Founded by Robert Raths in London, the label was built around a simple idea: to discover exciting music and help it reach a wider audience.

Its journey has been shaped by a willingness to take creative risks. Instead of limiting its catalogue to one genre, Erased Tapes brings together musicians from different backgrounds and musical traditions. This creates opportunities for collaboration and encourages artists to explore ideas beyond the boundaries of conventional music.

The label also shows how important independence can be in the creative industry. By supporting distinctive projects and giving musicians room to develop, it helps preserve the individuality of their work. Its story is not only about releasing records, but also about building a community around curiosity, imagination and a shared appreciation of sound.

Today, Erased Tapes continues to connect artists and listeners through music that invites people to listen more closely and discover something unexpected.</p>
  </div>
  </article>
    <section className="gallery">
  <img className="featured" src={featured} alt="Featured album cover" />
  <img src={album2} alt="Album cover 2" />
  <img src={album3} alt="Album cover 3" />
  <img src={album4} alt="Album cover 4" />
  <img src={album5} alt="Album cover 5" />
</section>
<section className="author">
  <div className="author-text">
    <h2>About the Author</h2>
    <p>Ahmed Webb, is a music journalist and critic with a passion for exploring the world of independent music. With over a decade of experience in the industry, he has written for various publications and has a deep understanding of the evolving music landscape. His work focuses on uncovering hidden gems and providing insightful commentary on emerging artists and trends.</p>
  </div>
  <img className="author-photo" src={authorpicture} alt="Author's profile picture" />
  <ul className="social-icons">
    <li><a href="https://www.facebook.com"><img src={icon1} alt="Facebook icon" /></a></li>
    <li><a href="https://www.twitter.com"><img src={icon2} alt="Twitter icon" /></a></li>
    <li><a href="https://www.instagram.com"><img src={icon3} alt="Instagram icon" /></a></li>
  </ul> 
</section>
      </div>
<section className="comments">
  <h2>Comments</h2>
  <div className="comment">
    <strong>musiclover92</strong>
    <p>I really enjoyed reading about Erased Tapes Records. I love how the label brings together classical music and electronic sounds to create something unique. Nils Frahm is one of my favourite artists!</p>
  </div>
  <div className="comment">
    <strong>alexmusic</strong>
    <p>This is a great introduction to the label. The combination of piano, ambient sounds and electronic production creates such an interesting atmosphere. I would love to discover more artists from the label.</p>
  </div>
  <div className="comment">
    <strong>soundexplorer</strong>
    <p>Erased Tapes Records has such a diverse roster of artists. I appreciate how they encourage experimentation and creativity. It's refreshing to see a label that values artistic freedom.</p>
  </div>
</section>
<footer className="footer">
  <nav className="footer-menu">
    <a href="#blog">Our Blog</a>
    <a href="#artist">Our Artists</a>
    <a href="#story">Our Story</a>
  </nav>

  <p>Copyright {currentYear} Ahmed Webb.</p>

  <ul className="social-icons">
    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={icon1} alt="Facebook" /></a></li>
    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={icon2} alt="Twitter" /></a></li>
    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={icon3} alt="Instagram" /></a></li>
  </ul>
</footer>
    </>
    );
}
export default App;

    