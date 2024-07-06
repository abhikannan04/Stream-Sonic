import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import { songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import Songitem from "./Songitem";
const DisplayHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mb-4">
        <h1 className="my-4 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => {
            return (
              <Albumitem
                key={index}
                name={album.name}
                desc={album.desc}
                id={album.id}
                image={album.image}
              ></Albumitem>
            );
          })}
        </div>
        <h1 className="my-4 font-bold text-2xl">Today's Biggest Hit</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => {
            return (
              <Songitem
                key={index}
                image={song.image}
                desc={song.desc}
                id={song.id}
              ></Songitem>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
