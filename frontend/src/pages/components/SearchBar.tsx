import React from "react";


interface SearchOption {
    label: string;
    value: string;
}

interface SearchBarProps {
    options: SearchOption[];
    placeholder?: string;
}

function SearchBar({ options, placeholder }: SearchBarProps) {
    const [query, setQuery] = React.useState("");


    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2"
            />

        </div>
    );
}


export default SearchBar;