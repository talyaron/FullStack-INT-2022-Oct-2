import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ImageCategory, selectImage } from '../images/imgBoxSlice';
import theme from '../../theme';
import { useAppSelector } from '../../app/hooks';

  const ControllableStates = () => {
  
    const CategoryList = Object.values(ImageCategory);
    if(!CategoryList) return
    for (const valueCategory of CategoryList);
    
  const [category, setCategory] = React.useState<string | null>(CategoryList[0]);
  const [inputValue, setInputValue] = React.useState('');

  
  const images = useAppSelector(selectImage)
  return (
    <div>

      <Autocomplete
      color={theme.palette.secondary.light }
        value={category}
        onChange={(event: any, newValue: string | null) => {
            setCategory(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="category-search"
        options={CategoryList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
    </div>
  );
}

export default ControllableStates