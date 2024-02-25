interface Props {
  query: string;
  category: string;
}

const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className="font-black text-xl px-1">
        Search results for "{query}" in{" "}
        <span className="capitalize">{category}</span>
      </h1>
    );
  }

  if (query) {
    return (
      <h1 className="font-black text-xl px-1">Search results for "{query}"</h1>
    );
  }

  if (category) {
    return null;
  }

  return <h1 className="font-black text-xl px-1">No Results</h1>;
};

export default Header;
