import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setStartLevel, setFinishLevel } from '../../../app/slice/tradingSkillSlice';


function LevelChoser() {

    const levelState = useAppSelector((state) => state.tradingSkillSlice.levelChoser);
    const dispatch = useAppDispatch();

    const mileStones = [0, 50, 100, 150, 200];
    const steps = [-5, -1, 1, 5];

    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <Grid item>
            <Typography variant="h2" gutterBottom component="div" sx={{ textAlign: 'center' }} >
                Level picker
            </Typography>
            </Grid>
            <Grid item >
                
                    <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center' }} >
                        Start level
                    </Typography>
                    <TextField id="filled-basic" label="MinLvl" variant="filled"
                        value={levelState.Start}
                        size="medium"
                        onChange={(e) => dispatch(setStartLevel(+e.target.value))}

                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 200,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                
                    <Typography variant="overline" display="block" gutterBottom>
                        Set start level
                    </Typography>
                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        {mileStones.map(i => (<Button key={i} onClick={() => { dispatch(setStartLevel(i)) }}>{i}</Button>))}
                    </ButtonGroup>
                

                    <Typography variant="overline" display="block" gutterBottom>
                        Change start level
                    </Typography>
                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        {steps.map(i => (<Button key={i} onClick={() => { dispatch(setStartLevel(levelState.Start + i)) }}>{i}</Button>))}
                    </ButtonGroup>
               
            </Grid>
            <Grid item>
                
                    <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center' }} >
                        Finish level
                    </Typography>
                    <TextField id="filled-basic" label="MinLvl" variant="filled"
                        value={levelState.Finish}
                        size="medium"
                        onChange={(e) => dispatch(setFinishLevel(+e.target.value))}

                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 200,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }} />
                
                    <Typography variant="overline" display="block" gutterBottom>
                        Set Finish level
                    </Typography>
                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        {mileStones.map(i => (<Button key={i} onClick={() => { dispatch(setFinishLevel(i)) }}>{i}</Button>))}
                    </ButtonGroup>
             
                    <Typography variant="overline" display="block" gutterBottom>
                        Change Finish level
                    </Typography>
                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        {steps.map(i => (<Button key={i} onClick={() => { dispatch(setFinishLevel(levelState.Finish + i)) }}>{i}</Button>))}
                    </ButtonGroup>
              
            </Grid>

        </Grid>
    );
}

export default LevelChoser;