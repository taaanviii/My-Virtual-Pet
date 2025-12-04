import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import "../Styles/HomeButton.css";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <IconButton
      className="home_btn"
      onClick={() => navigate("/")}
      sx={{ color: "white" }}
    >
      <HomeIcon fontSize="large" />
    </IconButton>
  );
}

export default HomeButton;
