interface IGithubLoader {
  src: string;
  width: number;
  quality?: number;
}

export default function githubLoader({ src, width, quality }: IGithubLoader) {
  return `${src}?w=${width}&q=${quality ?? 75}`;
}
