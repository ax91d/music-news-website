import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://uproxx.com/wp-content/uploads/2021/12/Eminem-Marshall-Mathers-36th-Annual-Rock-Roll-Hall-Of-Fame-Induction-Ceremony-2021-getty-full.jpg?w=1600&h=660&crop=1"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
