import { useDispatch } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { setSelected } from "../redux/actions/mapActions";

function PlacesAutoComplete() {
  const dispatch = useDispatch();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (value) => {
    setValue(value);
    clearSuggestions();

    if (value) {
      const results = await getGeocode({ address: value.label });
      const { lat, lng } = getLatLng(results[0]);
      dispatch(setSelected({ lat, lng }));
    }
  };

  return (
    <Autocomplete
      freeSolo={true}
      id="combo-box-demo"
      options={
        status === "OK"
          ? data.map((item) => {
              return {
                label: item.description,
                id: item.description,
              };
            })
          : []
      }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Find Location" />}
      onChange={(e, value) => handleSelect(value)}
      onInputChange={(e) => setValue(e.target.value)}
      disabled={!ready}
      value={value}
    />
  );
}

export default PlacesAutoComplete;
