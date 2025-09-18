import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
const SearchForm = ({ query }: { query: string }) => {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                name="query"
                defaultValue={query}
                placeholder="Search startups"
                className="search-input"
            />

            <div className="flex items-center gap-2">
                {query && <SearchFormReset />}
                <button type="submit" className="search-btn text-white">
                    S
                </button>
            </div>
        </Form>
    );
};

export default SearchForm;
