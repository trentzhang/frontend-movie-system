"use client";
import { addToListsContext } from "@/context/movie-detail-context";
import { getData } from "@/lib/dataFetchers";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from "@nextui-org/react";
import { PressEvent } from "@react-types/shared";
import { useContext, useEffect, useMemo, useState } from "react";

export function AddToListButton() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]) as Selection);

  const { addToLists } = useContext(addToListsContext);

  // initialize selectedKeys with the lists that the movie is already in by calling the API
  useEffect(() => {
    async function getListsWithCurrentMovieInside() {
      const movieId = window.location.pathname.split("/")[2];
      for (const list of addToLists) {
        const listData: ListAPI = await getData(`/api/movie-lists/${list.id}`);
        // if movieId in  listData.data.movies then add list.name to selectedKeys
        const movieIds = listData.data.movies.map((movie) => movie.id);
        if (movieIds.includes(movieId)) {
          if (selectedKeys !== "all") selectedKeys.add(list.name);
        }
      }
    }

    getListsWithCurrentMovieInside();
  }, [addToLists, selectedKeys]);

  function onPressListName(e: PressEvent) {
    const pressedListName = e.target.children[0].innerHTML;
    // if pressedListName is in selectedKeys, then remove it from the list
    const method =
      selectedKeys !== "all" && selectedKeys.has(pressedListName)
        ? "PUT"
        : "DELETE";
    console.log("method", pressedListName, method);

    const ListId = addToLists.find((list) => list.name === pressedListName)?.id;
    const movieId = window.location.pathname.split("/")[2];

    if (!ListId) {
      return;
    }

    // movieToList(movieId, ListId, method);
    getData(`/api/movie-lists/${ListId}/${movieId}`, { method: method });
  }

  return (
    <Dropdown className="bg-white/70 text-gray-700" backdrop="blur">
      <DropdownTrigger>
        <Button variant="faded" aria-label="Save to list">
          {/* <CameraIcon /> */}
          {"Save to list"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        closeOnSelect={false}
        onSelectionChange={setSelectedKeys}

        // classNames={{ base: "bg-black/20" }}
      >
        {addToLists.map((list) => {
          return (
            <DropdownItem
              key={list.name}
              value={list.name}
              onPress={onPressListName}
            >
              {list.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
