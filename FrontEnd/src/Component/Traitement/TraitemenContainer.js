import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TopBar from '../TopBar';
import Sidebar from '../SideBar';
// ======================================
import Menace from './Menace';
import Impact from './Impact';

import TraitActif from './TraitActif';
import Probabilite from './Probabilite';
import Risque from './Risque';
import Vulenerabilite  from './Vulenerabilite';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function TraitementContainer() {
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <>
      <TopBar title="Traitement"/>
      <Sidebar/>
      <div class="content-wrapper">
    <div className="traitement-container">
      <AppBar position="static">
        <Tabs className="tabs-traitement" value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="actifs" {...a11yProps(0)} />
          <Tab label="vulnerabilité" {...a11yProps(1)} />
          <Tab label="menace" {...a11yProps(2)} />
          <Tab label="impact" {...a11yProps(3)} />
          <Tab label="probabilité" {...a11yProps(4)} />
          <Tab label="risque" {...a11yProps(5)} />
          
        </Tabs>
      </AppBar>
      <TabPanel className="tab-traitement" value={value} index={0}>
        <TraitActif/>
      </TabPanel>
      <TabPanel className="tab-traitement" value={value} index={1}>
      <Vulenerabilite />
      </TabPanel>
      <TabPanel className="tab-traitement" value={value} index={2}>
        <Menace />
      </TabPanel>
      <TabPanel className="tab-traitement" value={value} index={3}>
      <Impact />
      </TabPanel>
      <TabPanel className="tab-traitement" value={value} index={4}>
         <Probabilite/>
      </TabPanel>
      <TabPanel className="tab-traitement" value={value} index={5}>
      <Risque/>
      </TabPanel>
      
    </div>
    </div>
    </>
  );
}
