import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

const FilterInput = ({ filter, handlerFilter }) => {
  const changeFilter = (e) => {
    handlerFilter(e.currentTarget.value);
  };

  const clearInput = () => {
    handlerFilter('');
  };
  return (
    <section className="form-floating mb-4 mx-auto" style={{ maxWidth: '560px' }}>
      <input
        type="text"
        className="form-control"
        id="floatingInput"
        placeholder="Type something to search ..."
        onChange={changeFilter}
        value={filter}
      />
      <label htmlFor="floatingInput">Search...</label>
      {filter.length > 0 ? (
        <TiDelete
          className=" position-absolute rounded-circle"
          style={{
            bottom: '25%',
            right: '12px',
            color: '#722929',
            cursor: 'pointer',
          }}
          size={32}
          onClick={clearInput}
        />
      ) : (
        <FaSearch
          className=" position-absolute rounded-circle"
          style={{
            bottom: '25%',
            right: '12px',
            color: '#7a7a7a',
            cursor: 'pointer',
          }}
          size={28}
        />
      )}
    </section>
  );
};

export default FilterInput;

FilterInput.propTypes = {
  filter: PropTypes.string.isRequired,
  handlerFilter: PropTypes.func.isRequired,
};
