'use client';

import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Card } from "./ui/Card";
import { Separator } from "./ui/Separator";
import { usePoints } from "@/contexts/PointsContext";

interface Props {
  posts: PostMetadata[];
}

export default function Posts({ posts }: Props) {
  const { addPoints } = usePoints();

  const handlePostClick = (title: string | undefined) => {
    if (!title) return;
    addPoints(8, `Read blog post: ${title}`);
  };

  return (
    posts.length > 0 && (
      <Card>
        <ul className="flex flex-col">
          {posts.map((post, i) => (
            <li key={i}>
              {i !== 0 && i !== posts.length && <Separator />}
              <Link 
                href={`/blog/${post.slug}`}
                onClick={() => handlePostClick(post.title)}
              >
                <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                  <div className="max-w-md md:max-w-lg">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      {post.summary}
                    </p>
                  </div>

                  {post.publishedAt && (
                    <p className="mt-2 flex w-full justify-end text-sm font-light sm:mt-0 sm:w-auto">
                      {formatDate(post.publishedAt)}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
    )
  );
}
