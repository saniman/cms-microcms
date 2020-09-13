import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, url, slug, id }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {id ? (
        <Link href={`/posts/${id}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
