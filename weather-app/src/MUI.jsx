import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MUI() {
  return (
    <>
      <h1>Material UI</h1>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Click Me!
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </>
  );
}
