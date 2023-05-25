import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const CustomPagination = ({ current, totalPages, onPageChange }) => {
  const [period, setPeriod] = useState([]);
  const createPaginationPeriod = (current, totalPages) => {
    const period = [];
    const start = current - 2 >= 1 ? current - 2 : 1;
    const end = current + 2 <= totalPages ? current + 2 : totalPages;

    for (let i = start; i <= end; i++) {
      period.push(i);
    }
    return setPeriod(period);
  };
  useEffect(() => {
    createPaginationPeriod(current, totalPages);
  }, [current, totalPages]);

  return (
    <div className="d-flex justify-content-center mt-4">
      <nav aria-label="...">
        <ul className="pagination pagination-lg">
          {period.map((page) => {
            const style = current === page ? 'page-item active' : 'page-item';
            return (
              <li key={page} className={style} aria-current="page">
                <button
                  type="button"
                  onClick={() => onPageChange(page)}
                  className="page-link"
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default CustomPagination;

CustomPagination.propTypes = {
  current: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
