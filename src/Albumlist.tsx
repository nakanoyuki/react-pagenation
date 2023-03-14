import React from "react";
import { Album } from "./type";

export type Props = {
  albums: Album[];
  currentAlbums: Album[];
};

const Albumlist = (props: Props) => {
  const { albums, currentAlbums } = props;
  return (
    <ul className="flex">
      {currentAlbums.map((album) => (
        <li key={album.id}>
          <img src={album.thumbnailUrl} />
        </li>
      ))}
    </ul>
  );
};

export default Albumlist;
