interface Props {
  page: number;
  onPage: (i: number) => void;
  totalPage: number;
}

const SelectPage = ({ page, onPage, totalPage }: Props) => {
  if (totalPage <= 1) {
    return;
  }
  return (
    <div>
      <div className="d-flex justify-content-evenly bg-dark p-3 mt-2">
        <a
          href="#"
          className="btn btn-primary fs-5"
          onClick={() => onPage(page - 1 > 0 ? page - 1 : page)}
        >
          previous
        </a>
        <div className="d-flex justify-content-center">
          <h5 className="text-light m-1">Page {page}</h5>
        </div>
        <a
          href="#"
          className="btn btn-primary fs-5"
          onClick={() => onPage(page + 1 <= totalPage ? page + 1 : page)}
        >
          next
        </a>
      </div>
    </div>
  );
};

export default SelectPage;
