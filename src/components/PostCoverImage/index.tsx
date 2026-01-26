import Image from "next/image";
import Link from "next/link";
import React from "react";

type PostCoverImage = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export function PostCoverImage({
  imageProps,
  linkProps,
}: Readonly<PostCoverImage>) {
  return (
    <Link
      className={`w-full h-full overflow-hidden rounded-xl ${linkProps.className}`}
      {...linkProps}
    >
      <Image
        className={`w-full h-full object-cover object-center group-hover:scale-105 transition duration-300 ${imageProps.className}`}
        {...imageProps}
      />
    </Link>
  );
}
