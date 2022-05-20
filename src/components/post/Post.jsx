import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://dynamicmedia.livenationinternational.com/Media/z/n/q/4be0274d-b77b-4fab-b39f-71e0d37979dc.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis
        omnis, hic temporibus nemo ullam aliquam praesentium quibusdam eius
        magni quaerat earum quas laboriosam ipsum fugiat provident dolorum sed
        ducimus.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi quis omnis, hic temporibus nemo ullam aliquam praesentium
        quibusdam eius magni quaerat earum quas laboriosam ipsum fugiat
        provident dolorum sed ducimus.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi quis omnis, hic temporibus nemo ullam
        aliquam praesentium quibusdam eius magni quaerat earum quas laboriosam
        ipsum fugiat provident dolorum sed ducimus.
      </p>
    </div>
  );
}
