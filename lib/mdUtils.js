import fs from "fs";
import path from "path";
import matter from "gray-matter";

const guideDirectory = path.join(
  process.cwd(),
  "content",
  "julia-download-guide"
);

export async function getGuideData(fileName) {
  const filePath = path.join(guideDirectory, fileName);
  const fileContent = await fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const guideData = {
    ...data,
    content,
  };

  return guideData;
}

export async function getDownloadGuidePosts() {
  const guideFiles = fs.readdirSync(guideDirectory);

  const allGuides = await Promise.all(
    guideFiles.map((guideFile) => {
      return getGuideData(guideFile);
    })
  );

  return allGuides;
}
