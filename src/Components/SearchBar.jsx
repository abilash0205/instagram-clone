import { Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <div>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search"
            className="px-8 w-[320px] bg-gray-200"
          />
        </Form>
      </div>

      <span className="border-1 w-full m-3" />
      <h2 className="font-semibold">Recent</h2>

      <p className="absolute translate-y-72">No recent searches</p>
    </div>
  );
};

export default SearchBar;
