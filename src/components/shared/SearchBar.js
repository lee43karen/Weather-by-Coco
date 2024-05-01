import { MyLocation } from "@mui/icons-material";
import { Autocomplete, debounce, IconButton, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useMemo, useState } from "react";
import {
  fetchLocations,
  fetchLocationsByCoords,
} from "../../utilities/api/Service";
import { formatCity } from "../../utilities/FormatUtils";

export default function SearchBar({ onSelectOption = () => {} }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  const fetchResults = useMemo(
    () =>
      debounce((request, callback) => {
        fetchLocations(request, callback);
      }, 400),
    []
  );

  useEffect(() => {
    let active = true;
    if (input === "") {
      setOptions([]);
      return;
    }
    if (/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(input)) {
      const [lat, lon] = input.split(", ")
      fetchLocationsByCoords(lat, lon, (response) => {
        setOpen(true); 
        if (response.status === 200) {
          setOptions([...response.data]);
        }
      });
      return;
    }
    fetchResults(input, (response) => {
      if (active && response.status === 200) {
        if (/^\d+$/.test(input)) {
          setOptions([response.data])
        } else {
          setOptions([...response.data]);
        }
      }
    });
    return () => {
      active = false;
    };
  }, [input, fetchResults]);

  function onInputChange(_, newInput) {
    if (newInput.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    setInput(newInput);
  }

  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const p = position.coords;
      if (p) {
        const element = document.getElementById("search-bar")
        const coords = `${p.latitude}, ${p.longitude}`
        if (element) {
          element.focus()
        }
        setInput(coords)
      }
    });
  }

  return (
    <Box className="w-full flex gap-2">
      <Autocomplete
        id="search-bar"
        className="w-full"
        options={options}
        open={open}
        inputValue={input}
        getOptionLabel={(result) =>
          formatCity(result.name, result.state, result.country)
        }
        filterOptions={(x) => x}
        noOptionsText="No results found"
        renderInput={(params) => (
          <TextField {...params} label="Search City or Zip Code"/>
        )}
        onChange={(_, selected) => {
          onSelectOption(selected);
          setOpen(false);
        }}
        onInputChange={onInputChange}
        onOpen={() => {
          if (input) {
            setOpen(true);
          }
        }}
        onClose={() => setOpen(false)}
        autoComplete
        filterSelectedOptions
      />
      <IconButton
        className="w-14"
        aria-label="Get current location"
        onClick={getCurrentLocation}
      >
        {<MyLocation />}
      </IconButton>
    </Box>
  );
}
