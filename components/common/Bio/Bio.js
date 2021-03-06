import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
        src={require("../../../content/assets/profile.jpg")}
        webpSrc={require("../../../content/assets/profile.jpg?webp")}
        previewSrc={require("../../../content/assets/profile.jpg?lqip")}
        alt="Profile"
      />

      <p className="text-base leading-7">
        <b className="font-semibold">{author.name}</b> is a {author.summary}
        <br />
        <a href={`https://github.com/${social.github}`}>Follow me on github</a>
      </p>
    </div>
  );
}
