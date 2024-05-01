import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function DetailsList({ details = [] }) {
  function renderRow(data) {
    return (
      <ListItem key={data.key}>
        <Box className="w-full flex gap-2 justify-between items-center">
          <Typography variant="h6" component="div">
            {data.key}
          </Typography>
          <Typography>{data.value}</Typography>
        </Box>
      </ListItem>
    );
  }

  if (details.length === 0) {
    return false;
  }

  return (
    <List className="w-full grid md:grid-cols-2 gap-4 divide-y">
      {details.map(renderRow)}
    </List>
  );
}
