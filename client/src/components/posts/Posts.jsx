import Post from "../post/Post";
import "./posts.css";
import { motion } from "framer-motion";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.slice(0).reverse().map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
