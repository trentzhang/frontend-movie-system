"use client";
import { addToListsContext } from "@/context/movie-detail-context";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
} from "@nextui-org/react";
import { useContext, useEffect, useMemo, useState } from "react";

export function AddToListButton() {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]) as Selection);
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const { addToLists } = useContext(addToListsContext);

  // when selectedKeys changes, put the movie into the list
  useEffect(() => {
    const listName = Array.from(selectedKeys)[0];
    const ListId = addToLists.find((list) => list.name === listName)?.id;
    const movieId = window.location.pathname.split("/")[2];

    if (!ListId) {
      return;
    }

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/list/movie/${ListId}/${movieId}`,
      {
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [selectedKeys]);

  return (
    <Dropdown className="dark">
      <DropdownTrigger>
        <Button color="warning" variant="faded" aria-label="Save to list">
          {/* <CameraIcon /> */}
          {selectedValue ? selectedValue : "Save to list"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        selectionMode="single"
        selectedKeys={selectedKeys}
        //ts-ignore
        onSelectionChange={(keys) => setSelectedKeys(keys)}

        // classNames={{ base: "bg-black/20" }}
      >
        {addToLists.map((list) => {
          return (
            <DropdownItem key={list.name} value={list.name}>
              {list.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}
