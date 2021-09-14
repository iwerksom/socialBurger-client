import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default (ratingNumber) => {
  switch (ratingNumber) {
    case 1:
      return (
        <span>
          <StarIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </span>
      );
    case 2:
      return (
        <span>
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </span>
      );
      case 3:
      return (
        <span>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </span>
      );
      case 4:
      return (
        <span>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
        </span>
      );
    case 5:
      return (
        <span>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </span>
      );
    default:
      return (
        <span>
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
          <StarBorderIcon />
        </span>
      );
  }
};
