import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAll, fetchFilters, ActiveFilterChanged, changedSearchValue } from "./CoffeeSlice";
import Spinner from "../../layouts/Spinner/Spinner";
import "./CoffeeFilters.scss";

const CoffeeFilters = () => {

    const dispatch = useDispatch();
    const { selectFilter, searchValue } = useSelector(state => state.filters);
    const filters = useSelector(state => selectAll(state));

    useEffect(() => {
		if (!filters.length) {
			dispatch(fetchFilters());
		}
	}, []);

    
    const onChangeValue = (e) => {
        dispatch(changedSearchValue(e.target.value));
    }

    const renderFilters = (items) => {
        if(!items.length) {
            return (
                <p className="error">error</p>
            )
        }

        return items.map(({id, label}) => {
            const activeClass = label === selectFilter ? 'coffee__filters_button-active' : '';
            return (
                <button key={id} className={`coffee__filters_button ${activeClass}`} onClick={() => dispatch(ActiveFilterChanged(label))} >{label}</button>
            )
        })
    }

    const elements = renderFilters(filters);

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
                    name="coffee name"
                    value={searchValue}
                    onChange={onChangeValue}
                />
            </div>
            <div className="coffee__filters_countries">
                <label className="coffee__filters_label">Or filter</label>
                <div className="coffee__filters_list">
                    {elements}
                </div>
            </div>
        </div>
    );
};

export default CoffeeFilters;
