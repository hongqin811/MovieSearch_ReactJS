interface Props {
  page: number;
  onPage: (i: number) => void;
  totalPage: number;
}

const SelectPage = ({ page, onPage, totalPage }: Props) => {
  if (totalPage <= 1) {
    return;
  }
  console.log(page, totalPage, (page - 2) % totalPage);
  return (
    <div>
      <div className="d-flex justify-content-evenly bg-dark p-3 mt-2">
        <a
          href="#"
          className="btn btn-primary fs-5"
          onClick={() =>
            onPage(
              (page - 1) % totalPage == 0 ? totalPage : (page - 1) % totalPage
            )
          }
        >
          previous
        </a>
        <div className="d-flex justify-content-center">
          <a
            href="#"
            className="btn btn-primary fs-5 m-1"
            onClick={() =>
              onPage(
                (page - 2 + totalPage) % totalPage === 0
                  ? totalPage
                  : (page - 2 + totalPage) % totalPage
              )
            }
          >
            {(page - 2 + totalPage) % totalPage === 0
              ? totalPage
              : (page - 2 + totalPage) % totalPage}
          </a>
          <a
            href="#"
            className="btn btn-primary fs-5 m-1"
            onClick={() =>
              onPage(
                (page - 1) % totalPage === 0
                  ? totalPage
                  : (page - 1) % totalPage
              )
            }
          >
            {(page - 1) % totalPage === 0 ? totalPage : (page - 1) % totalPage}
          </a>

          <a href="#" className="btn btn-info fs-5 m-1">
            {page}
          </a>
          <a
            href="#"
            className="btn btn-primary fs-5 m-1"
            onClick={() =>
              onPage(
                (page + 1) % totalPage === 0
                  ? totalPage
                  : (page + 1) % totalPage
              )
            }
          >
            {(page + 1) % totalPage === 0 ? totalPage : (page + 1) % totalPage}
          </a>
          <a
            href="#"
            className="btn btn-primary fs-5 m-1"
            onClick={() =>
              onPage(
                (page + 2) % totalPage === 0
                  ? totalPage
                  : (page + 2) % totalPage
              )
            }
          >
            {(page + 2) % totalPage === 0 ? totalPage : (page + 2) % totalPage}
          </a>
          <h1 className="text-primary">...</h1>
          <a
            href="#"
            className="btn btn-primary fs-5 m-1"
            onClick={() => onPage(totalPage)}
          >
            {totalPage}
          </a>
        </div>

        <a
          href="#"
          className="btn btn-primary fs-5"
          onClick={() =>
            onPage(
              (page + 1) % totalPage === 0 ? totalPage : (page + 1) % totalPage
            )
          }
        >
          next
        </a>
      </div>
    </div>
  );
};

export default SelectPage;
