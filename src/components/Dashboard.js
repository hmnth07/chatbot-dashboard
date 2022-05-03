import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import "./Dashboard.css";

import TextField from '@mui/material/TextField';

export default function Dashboard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion 
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary sx={{pr: 0}}
          expandIcon={<Button variant="contained">Edit</Button>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Widget Style
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General Settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Manage basic settings from here, Add ripple effect, enable floating
            etc.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Header settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You can change all your header settings here! Expand it to make changes.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <TextField sx={{m:1, ml: 0, width: "45%"}}
            required
            id="outlined-required"
            label="Title"
            defaultValue="Appointment Bot"
            />
            <TextField sx={{m:1, width: "45%"}}
            id="outlined-required"
            label="Caption(optional)"
            defaultValue="Book Easy Appointment"
            />
            <TextField sx={{m:1, ml: 0,  width: "45%"}}
            id="outlined-required"
            label="Font Family"
            defaultValue="Roboto, sans-serif"
            />
            <TextField sx={{m:1, width: "45%"}}
            id="outlined-required"
            label="Foreground Colour"
            defaultValue="#fffff"
            />
            <TextField sx={{m:1, ml: 0,  width: "45%"}}
            id="outlined-required"
            label="Background Colour"
            defaultValue="#1768d0"
            />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Footer Settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Manage menu, attachments, emojis etc.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div>
        <Button sx={{m: 1, mr: 0, float: "right"}} variant="contained">Add to Website</Button>
      </div>
    </div>
  );
}
