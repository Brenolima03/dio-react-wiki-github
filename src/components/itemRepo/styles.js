import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #FAFAFA;
  }

  p {
    font-size: 20px;
    color: #FAFAFA60;
    margin-bottom: 5px;
  }

  a {
    font-size: 20px;
    text-decoration: none;

    &.show-repo {
      color: #1E90FF; /* Base color for show-repo (DodgerBlue) */

      &:hover {
        color: #4169E1; /* Hover color (RoyalBlue) */
      }

      &:visited {
        color: #305f8a; /* Darker visited color (DarkSlateBlue) */
        
        &:hover {
          color: #27408B; /* Darker color for visited and hovered */
        }
      }
    }

    &.remove {
      color: #FF4500; /* Base color for remove link (OrangeRed) */
      margin: 20px 0;
      cursor: pointer;

      &:hover {
        color: #C0392B; /* Darker red for hover effect */
      }
    }
  }

  hr {
    font-size: 16px;
    margin: 20px 0;
  }
`;
