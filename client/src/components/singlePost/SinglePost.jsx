import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://dynamicmedia.livenationinternational.com/Media/z/n/q/4be0274d-b77b-4fab-b39f-71e0d37979dc.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Akhmet</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam velit
          impedit voluptas, debitis dicta reiciendis asperiores voluptatem
          officia! Deleniti aspernatur alias ut commodi iure culpa rerum aut
          beatae sint hic. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Magnam velit impedit voluptas, debitis dicta reiciendis
          asperiores voluptatem officia! Deleniti aspernatur alias ut commodi
          iure culpa rerum aut beatae sint hic. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Magnam velit impedit voluptas, debitis
          dicta reiciendis asperiores voluptatem officia! Deleniti aspernatur
          alias ut commodi iure culpa rerum aut beatae sint hic.
        </p>
      </div>
    </div>
  );
}
