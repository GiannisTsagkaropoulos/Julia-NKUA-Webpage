import classes from "./FeaturedPosts.module.css";
import PostsGrid from "../posts/PostsGrid";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <ul>
        <PostsGrid posts={props.posts} />
      </ul>
    </section>
  );
}

export default FeaturedPosts;
