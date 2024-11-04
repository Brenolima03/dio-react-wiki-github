import React from "react";
import { ItemContainer } from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  const handleRemove = (e) => {
    e.preventDefault();
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a
        className="show-repo" href={repo.html_url}
        rel="noreferrer" target="_blank"
      >
        Show repository
      </a>
      <br />
      <a href="#" onClick={handleRemove} className="remove">
        Remove
      </a>
      <hr />
    </ItemContainer>
  );
};
export default ItemRepo;
