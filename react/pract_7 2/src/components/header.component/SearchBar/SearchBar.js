import './SearchBar.css'; 

export const SearchBar = () => {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search store..." 
                
            />
            <button className="search-btn">
                🔍
            </button> 
        </div>
    );
}