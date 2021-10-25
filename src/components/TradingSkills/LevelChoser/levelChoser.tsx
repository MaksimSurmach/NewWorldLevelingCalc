import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

interface income{
    lvl: number[];
    Passingback: (arg: any) => void
}
const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 100,
      label: '100',
    },
    {
      value: 150,
      label: '150',
    },
    {
        value: 170,
        label: '170',
    },
    {
        value: 200,
        label: '200',
    },
  ];
export const LevelChoser= (props:income)  =>{
    const [CalcQt, setQt] = React.useState<number[]>([0,150]);
    const [minlvl, setminlvl] = React.useState<number>(
        0,
      );
    const [maxLvl, setmaxLvl] = React.useState<number >(
    150,
    );


    
    const handleChangeSlider = (event: React.SyntheticEvent | Event, newValue: number | Array<number>) => {
        if (!Array.isArray(newValue)) {
            return;
          }
        
        setmaxLvl(newValue[1])
        setminlvl (newValue[0])
        setQt(newValue as number[]);
        props.Passingback(newValue as number[])
        
        
      };
      
    
      const handleInputChangeMaxLVL = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = (event.target.value === '' ? '' : Number(event.target.value))
        if (typeof newValue == 'number') {
            setmaxLvl(newValue);
            setQt([CalcQt[0],newValue]);
        }else return;
        
      };
    
      const handleInputChangeMinLVL = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = (event.target.value === '' ? '' : Number(event.target.value))
        if (typeof newValue == 'number') {
        setminlvl(newValue);
            setQt([newValue,CalcQt[1]]);
        }else return;
        
      };
    

      const handleClickButtonMinus = (qt:number) =>{
          const newValue:number = maxLvl - qt;
                setQt([CalcQt[0],newValue]);
                setmaxLvl(newValue);
                return;
      }
      
      const handleClickButtonInc = (qt:number) =>{
        const newValue:number = maxLvl + qt;
        setQt([CalcQt[0],newValue]);
        setmaxLvl(newValue);
        return;
    }


    useEffect(()=>{
        setQt(CalcQt)

        
    }, [CalcQt])
   
    
    return(
        <Stack  spacing={2}>
            <Typography variant="h2" gutterBottom component="div" sx={{ textAlign: 'center' }} >
                Level picker
            </Typography>
                <Stack >
                    <Box>
                    <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center' }} >
                        Starter level
                    </Typography>
                        <TextField id="filled-basic" label="MinLvl" variant="filled" 
                                value={minlvl}
                                size="medium"
                                onChange={handleInputChangeMinLVL}
                                
                                inputProps={{
                                step: 10,
                                min: 0,
                                max: 200,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                                }}
                            />
                    </Box>
                    <Box>
                        <Typography variant="overline" display="block" gutterBottom>
                            Set start level
                        </Typography>
                        <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                            <Button onClick={() =>{}}>50</Button>
                            <Button onClick={() =>{}}>100</Button>
                            <Button onClick={() =>{}}>150</Button>
                            <Button onClick={() =>{}}>170</Button>
                            <Button onClick={() =>{}}>190</Button>
                            <Button onClick={() =>{}}>200</Button>
                        </ButtonGroup>
                    </Box>

                    <Box>
                    <Typography variant="overline" display="block" gutterBottom>
                       Change start level
                    </Typography>
                        <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                            <Button onClick={() =>handleClickButtonMinus(5)}>-5</Button>
                            <Button onClick={() =>handleClickButtonMinus(1)}>-1</Button>
                            <Button onClick={() =>handleClickButtonInc(1)}>+1</Button>
                            <Button onClick={() =>handleClickButtonInc(5)}>+5</Button>
                        </ButtonGroup>
                </Box>
            </Stack>
            <Stack>
            
                <Box>
                    <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center' }} >
                        Finish level
                    </Typography>

                  
                    
                        <TextField id="filled-basic" label="MaxLvl" variant="filled"
                            value={maxLvl}
                            size="medium"
                            onChange={handleInputChangeMaxLVL}
                        
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 200,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                     
                </Box>
                <Box>
                    <Typography variant="overline" display="block" gutterBottom>
                        Set finish level
                    </Typography>
                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() =>{}}>50</Button>
                        <Button onClick={() =>{}}>100</Button>
                        <Button onClick={() =>{}}>150</Button>
                        <Button onClick={() =>{}}>170</Button>
                        <Button onClick={() =>{}}>190</Button>
                        <Button onClick={() =>{}}>200</Button>
                    </ButtonGroup>
                </Box>
                <Box>
                    <Typography variant="overline" display="block" gutterBottom>
                        Change finish level
                    </Typography>
                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() =>handleClickButtonMinus(5)}>-5</Button>
                        <Button onClick={() =>handleClickButtonMinus(1)}>-1</Button>
                        <Button onClick={() =>handleClickButtonInc(1)}>+1</Button>
                        <Button onClick={() =>handleClickButtonInc(5)}>+5</Button>
                    </ButtonGroup>
                </Box>
            </Stack>
            <Box sx={{ width: 300 }}>
            <Slider
                min={0}
                max={200}
                step={1}
                marks={marks}
                getAriaLabel={() => 'Level Range'}
                value={CalcQt}
                size={'medium'}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
            />
            </Box>
            


        </Stack>
    );
}