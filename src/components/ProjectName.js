import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProjectName = props => {
  const [deleteClicked, setDeleteClicked] = useState(false);

  const deleteHandler = projectId => {
    setDeleteClicked(false);
    props.delete(projectId);
  };
  return (
    <div className="project-name" onClick={() => props.select(props.name)}>
      <div className="project-name__title">{props.name}</div>
      <div className="project-name__delete">
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => setDeleteClicked(true)}
        />
        {deleteClicked && (
          <div className="project-name__delete--box">
            <p>Delete "{props.name}"?</p>
            <button
              className="btn btn--delete"
              onClick={() => deleteHandler(props.docId)}
            >
              Yes
            </button>
            <button
              className="btn btn--keep"
              onClick={() => setDeleteClicked(false)}
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectName;
