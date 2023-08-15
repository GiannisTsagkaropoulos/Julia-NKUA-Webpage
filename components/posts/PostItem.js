import Image from "next/image";
import Link from "next/link";
import classes from "./PostItem.module.css";

function PostItem(props) {
  const { title, date, image, slug, excerpt } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  //   $
  const linkPath = `/posts/${slug}`;

  console.log(imagePath);
  return (
    <li className={classes.post}>
      <Link legacyBehavior href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              alt={title}
              src={imagePath}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
