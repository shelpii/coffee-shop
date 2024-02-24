import "./CoffeeFilters.scss";

const CoffeeFilters = () => {
    return (
        <div className="coffee__filters">
            <div className="coffee__filters_search">
                <label htmlFor="text" className="coffee__filters_label">
                    Lookiing for
                </label>
                <input
                    type="text"
                    className="coffee__filters_input"
                    id="filters__input"
                    placeholder="start typing here..."
                />
            </div>
            <div className="coffee__filters_countries">
                <label className="coffee__filters_label">Or filter</label>
                <div className="coffee__filters_list">
                    <button className="coffee__filters_button">Brazil</button>
                    <button className="coffee__filters_button">Kenya</button>
                    <button className="coffee__filters_button">Columbia</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeFilters;
