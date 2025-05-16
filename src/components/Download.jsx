export default function Download({ slug }) {
  return (
    <a href={`https://github.com/wikibook/${slug}`}>
      <img src="./images/dl.png" alt="download" />
    </a>
  );
}
