import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Albumlist from "./Albumlist";
import { Album } from "./type";

export type Props = {
  albums: Album[];
};
export const Pagination = (props: Props) => {
  const { albums } = props;

  const itemsPerPage = 6;
  const [itemOffset, setItemoffset] = useState(6);

  const endOffset = itemOffset + itemsPerPage;
  const currentAlbums = albums.slice(itemOffset, endOffset); //始まり終わり
  const pageCount = Math.ceil(albums.length / itemsPerPage);

  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % albums.length;
    setItemoffset(newOffset);
  };
  return (
    <div>
      <Albumlist albums={albums} currentAlbums={currentAlbums} />
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};
