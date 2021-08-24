import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import MatchFilterDesc from '../MatchFilterDesc/MatchFilterDesc';

const useStyles = makeStyles((theme) => ({
  filter: {
    position: 'sticky',
    top: 0,
    bottom: 8,
    zIndex: 5
  },
  formControl: {
    padding: theme.spacing(1)
  },
  formLabel: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  formGroup: {
    marginBottom: theme.spacing(1.5)
  }
}));

const MatchFilter = () => {
  const classes = useStyles();

  const initialState = {
    map: [],
    teamType: [],
    perspective: []
  };

  const [state, setState] = useState({
    ...initialState
  });

  const [count, setCount] = useState(0);

  // const handleChange = (event) => {
  //   if (state[event.target.name] === false) {
  //     setCount((prevCount) => prevCount + 1);
  //   } else {
  //     setCount((prevCount) => prevCount - 1);
  //   }
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked
  //   });
  // };

  const handleMapChange = (event) => {
    let mapData = [...state.map];

    if (event.target.checked === true) {
      mapData.push(event.target.name);
      setCount((prevCount) => prevCount + 1);
    }
    if (event.target.checked === false) {
      const index = mapData.indexOf(event.target.name);
      mapData.splice(index, 1);
      setCount((prevCount) => prevCount - 1);
    }
    setState({ ...state, map: mapData });
  };

  const handleTeamTypeChange = (event) => {
    let teamTypeData = [...state.teamType];

    if (event.target.checked) {
      teamTypeData.push(event.target.name);
      setCount((prevCount) => prevCount + 1);
    } else {
      const index = teamTypeData.indexOf(event.target.name);
      teamTypeData.splice(index, 1);
      setCount((prevCount) => prevCount - 1);
    }
    setState({ ...state, teamType: teamTypeData });
  };

  const handlePerspectiveChange = (event) => {
    let perspectiveData = [...state.perspective];

    if (event.target.checked === true) {
      perspectiveData.push(event.target.name);
      setCount((prevCount) => prevCount + 1);
    }
    if (event.target.checked === false) {
      const index = perspectiveData.indexOf(event.target.name);
      perspectiveData.splice(index, 1);
      setCount((prevCount) => prevCount - 1);
    }
    setState({ ...state, perspective: perspectiveData });
  };

  const handleClearFilter = () => {
    setState({ ...initialState });
    setCount(0);
  };

  const { map, teamType, perspective } = state;

  return (
    <Box className={classes.filter}>
      <MatchFilterDesc count={count} clearFilter={handleClearFilter} />

      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup className={classes.formGroup}>
          <FormLabel component="legend" className={classes.formLabel}>
            Map
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={map.includes('Erangel')}
                onChange={handleMapChange}
                name="Erangel"
                color="primary"
                size="small"
              />
            }
            label="Erangel"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={map.includes('Miramar')}
                onChange={handleMapChange}
                name="Miramar"
                color="primary"
                size="small"
              />
            }
            label="Miramar"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={map.includes('Sanhok')}
                onChange={handleMapChange}
                name="Sanhok"
                color="primary"
                size="small"
              />
            }
            label="Sanhok"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={map.includes('Vikendi')}
                onChange={handleMapChange}
                name="Vikendi"
                color="primary"
                size="small"
              />
            }
            label="Vikendi"
          />
        </FormGroup>
      </FormControl>

      <Divider />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup className={classes.formGroup}>
          <FormLabel component="legend" className={classes.formLabel}>
            Team Type
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={teamType.includes('Solo')}
                onChange={handleTeamTypeChange}
                name="Solo"
                color="primary"
                size="small"
              />
            }
            label="Solo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={teamType.includes('Duo')}
                onChange={handleTeamTypeChange}
                name="Duo"
                color="primary"
                size="small"
              />
            }
            label="Duo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={teamType.includes('Squad')}
                onChange={handleTeamTypeChange}
                name="Squad"
                color="primary"
                size="small"
              />
            }
            label="Squad"
          />
        </FormGroup>
      </FormControl>

      <Divider />
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup className={classes.formGroup}>
          <FormLabel component="legend" className={classes.formLabel}>
            Persepective
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={perspective.includes('FPP')}
                onChange={handlePerspectiveChange}
                name="FPP"
                color="primary"
                size="small"
              />
            }
            label="FPP"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={perspective.includes('TPP')}
                onChange={handlePerspectiveChange}
                name="TPP"
                color="primary"
                size="small"
              />
            }
            label="TPP"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default MatchFilter;
