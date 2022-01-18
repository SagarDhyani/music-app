import "./Pagination.css"





const Pagination = ({ page, pages, change }) => {

  let middle;

  if (pages <= 5) {

    middle = [...Array(pages)].map((_, idx) => (
      <button
        key={idx + 1}
        onClick={() => change(idx + 1)}
        disabled={page === idx + 1}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startValue = Math.floor((page - 1) / 5) * 5;

    middle = (
      <>
        {[...Array(2)].map((_, idx) => (
          <button
            key={startValue + idx + 1}
            disabled={page === startValue + idx + 1}
            onClick={() => change(startValue + idx + 1)}
          >
            {startValue + idx + 1}
          </button>
        ))}

        <button>...</button>
        <button onClick={() => change(pages)}>{pages}</button>
      </>
    );

    if (page > 3) {
      if (pages - page >= 3) {
        middle = (
          <>
            <button onClick={() => change(1)}>1</button>
            <button>...</button>
            <button onClick={() => change(startValue)}>{startValue}</button>
            {[...Array(2)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                onClick={() => change(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}

            <button>...</button>
            <button onClick={() => change(pages)}>{pages}</button>
          </>
        );
      } else {
        let amountLeft = pages - page + 3;
        middle = (
          <>
            <button onClick={() => change(1)}>1</button>
            <button>...</button>
            <button onClick={() => change(startValue)}>{startValue}</button>
            {[...Array(amountLeft)].map((_, idx) => (
              <button
                key={startValue + idx + 1}
                disabled={page === startValue + idx + 1}
                style={
                  pages < startValue + idx + 1 ? { display: "none" } : null
                }
                onClick={() => change(startValue + idx + 1)}
              >
                {startValue + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }

  return (
    pages > 1 && (
      <div className="pagination">
        <button
          className="previous_button"
          onClick={() => change((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </button>
        {middle}
        <button
          className="pagination__next"
          onClick={() => change((page) => page + 1)}
          disabled={page === pages}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;