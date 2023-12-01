import { Avatar, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, Menu, MenuItem, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { GridView, Groups, DataUsage, LocalShipping, MonitorHeart, Language, Chat, Settings, Sort, FilterAlt, Search } from '@mui/icons-material'

import BasicTable from './components/Table'
import { dataSet } from './utils/data'
import LOGO from "./assets/logo.png";

const App = () => {


  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = React.useState('none');
  const [anchorEl, setAnchorEl] = React.useState(null);
  let filteredData = dataSet.slice();

  filteredData = dataSet.filter((dataObj) => dataObj.name.toLowerCase().includes(search.toLowerCase()) || dataObj.contact.includes(search) || dataObj.status.toLowerCase().includes(search.toLowerCase()));

  filteredData = filteredData.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    }
    if (sortBy === 'msgExchanged') {
      return (+ a.msgExchanged) - (+ b.msgExchanged);
    }
  })



  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sortHandler = (event, value) => {
    console.log(value);
    setSortBy(value);

  };



  return (
    <main>
      <header className=''>
        <nav className='flex justify-between  py-4 px-8 border-b-2 items-center'>
          <img src={LOGO} alt="" className='relative w-40 max-sm:w-28' />
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww" />
        </nav>

      </header>

      <div className='relative dashboard-layout '>
        <div className=' p-8 border-r-2 min-h-screen  '>
          <ul className='flex flex-col gap-8 justify-center items-center max-sm:gap-6 '>
            <li>
              <IconButton  >
                <GridView fontSize='large' color='primary' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
            <li>
              <IconButton >
                <Groups fontSize='large' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
            <li>
              <IconButton >
                <DataUsage fontSize='large' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
            <li>
              <IconButton >
                <LocalShipping fontSize='large' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
            <li>
              <IconButton >
                <MonitorHeart fontSize='large' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
            <li>
              <IconButton >
                <Language fontSize='large' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
            <li>
              <IconButton >
                <Chat fontSize='large' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
            <li>
              <IconButton >
                <Settings fontSize='large' sx={{
                  '@media (max-width: 640px)': {
                    fontSize: '24px',
                  }
                }} />
              </IconButton>
            </li>
          </ul>
        </div>
        <div className='p-4  flex justify-center overflow-hidden'>
          <div className='relative overflow-hidden w-full '>
            <div className='flex justify-between items-center bg-gray-100 py-4 px-6 border-2 rounded-xl mb-4 w-full max-md:flex-col max-md:gap-4'>
              <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e) => {
                setSearch(e.target.value)
              }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <div className='flex gap-6 max-sm:gap-4'>
                <Button onClick={handleClick} variant="filled" startIcon={<Sort />} sx={{
                  backgroundColor: 'white', color: 'gray', textTransform: "none", boxShadow: 'none', border: "2px solid", '&:hover': { backgroundColor: 'white' }, '@media (max-width: 640px)': {
                    fontSize: '12px',
                    padding:'2px',
                  }
                }}>
                  Sort
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}

                >
                  <FormControl sx={{ padding: "10px" }}>
                    <FormLabel sx={{ fontSize: '14px' }}>Sort By:</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={sortBy}
                      name="radio-buttons-group"
                      onChange={sortHandler}
                    >
                      <FormControlLabel value="name" control={<Radio />} label="Name" />
                      <FormControlLabel value="msgExchanged" control={<Radio />} label="Msg Exchanged" />
                      <FormControlLabel value="none" control={<Radio />} label="None" />
                    </RadioGroup>
                  </FormControl>
                </Menu>
                <Button variant='filled' startIcon={<FilterAlt />} sx={{ backgroundColor: 'white', color: 'gray', textTransform: "none", boxShadow: 'none', border: "2px solid", '&:hover': { backgroundColor: 'white'  },'@media (max-width: 640px)': {
                    fontSize: '12px',
                    padding:'2px',
                  } }}>
                  Filter
                </Button>
                <Button variant="filled" sx={{ backgroundColor: 'white', color: 'gray', textTransform: "none", boxShadow: 'none', border: "2px solid", '&:hover': { backgroundColor: 'white' },'@media (max-width: 640px)': {
                    fontSize: '12px',
                    padding:'2px',
                  } }} >
                  Status
                </Button>
              </div>
            </div>
            <BasicTable data={filteredData} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App