"use client";

import { useEffect, useState } from "react";
import { fetchAPI } from "~/services/api";
import { newsType } from "~/utils/interface";

export default function HomeContent() {
  const [data, setData] = useState<newsType[]>([]);

  useEffect(() => {
    fetchAPI().then((res) => setData(res));
  }, []);

  return data.map(({ url, story_id, title }) => (
    <a
      href={url}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
      key={story_id}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
    </a>
  ));
}
