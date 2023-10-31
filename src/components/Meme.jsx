import "../styles/meme.css";

const Meme = () => {
  return (
    <div>
      <div className="form">
        <div className="input-container">
          <input className="form-input" type="text" placeholder="Top text" />
          <input className="form-input" type="text" placeholder="Bottom text" />
        </div>
        <button className="meme-button">Get a new meme image 🖼</button>
      </div>
    </div>
  );
};

export default Meme;
