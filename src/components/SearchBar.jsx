import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ onSubmit }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	}
	const onKeyPress = (event) => {
		if(event.key === "Enter") {
			onSubmit(searchTerm);
		}
	}

	return (
		  <div className="form-group">
		    <input
		      type="text"
		      className="form-control"
		      id="searchInput"
		      placeholder="Search.."
		      value={searchTerm}
          	  onChange={handleChange}
          	  onKeyPress={onKeyPress}
		    />
		  </div>
		)
}

export default SearchBar;