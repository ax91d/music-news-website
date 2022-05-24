import { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Single() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </motion.div>
  );
}
