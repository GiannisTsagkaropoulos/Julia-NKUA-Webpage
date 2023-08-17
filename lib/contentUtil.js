import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getParsedFileContentBySlug(postFilePath) {
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    data,
    content,
  };
}
