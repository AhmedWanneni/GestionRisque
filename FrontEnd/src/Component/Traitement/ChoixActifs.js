
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
import Actif from './Actif';
import Actifchoisi from './Actifchoisi';



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
      <TopBar title="Traitement" />
      <Sidebar />
      <div class="content-wrapper">
        <div className="traitement-container">
          <AppBar position="static">
            <Tabs className="tabs-traitement" value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="actifs" {...a11yProps(0)} />
              <Tab label=" choix actif" {...a11yProps(1)} />

            </Tabs>
          </AppBar>
          <TabPanel className="tab-traitement" value={value} index={0}>
            <Actif />
          </TabPanel>
          <TabPanel className="tab-traitement" value={value} index={1}>
            <Actifchoisi />
            </TabPanel>


        </div>
      </div>
    </>
  );
}
