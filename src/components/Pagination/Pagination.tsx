import React, { useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "../../hooks/redux";

import { fetchCharacters } from "../../redux/actionCreators/fetchCharacters";
interface PaginationProps {
  pageCount: number;
}

const Pagination = ({ pageCount }: PaginationProps) => {
  const dispatch = useAppDispatch();
  const page = useRef(1);
  useEffect(() => {
    dispatch(fetchCharacters(page.current));
  }, [dispatch]);

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    page.current = selected + 1;
    dispatch(fetchCharacters(page.current));
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={pageChangeHandler}
      forcePage={page.current === 1 ? 0 : page.current - 1}
      nextLabel="next ->"
      previousLabel="<- prev"
      containerClassName="flex  justify-center my-[76px]"
      pageClassName="py-1 px-2 "
      previousClassName="py-1 px-2 "
      nextClassName="py-1 px-2 "
      activeClassName="font-bold"
    />
  );
};

export default Pagination;
