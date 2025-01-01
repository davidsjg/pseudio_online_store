import "./Searchbar.css";
export default function SearchBar({ filterText, onFilterTextChange }) {
  function testFunc(target) {
    console.log(target.value);
  }
  return (
    <form>
      <div className="inputContain">
        <input
          type="text"
          value={filterText}
          className="inputCl"
          placeholder="Search Category..."
          onChange={(e) => {
            onFilterTextChange(e.target.value);
            testFunc(e.target);
          }}
        />
      </div>
    </form>
  );
}
