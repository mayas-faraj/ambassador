import React from 'react';
import siteUrls from '/public/siteUrls.json';
const settings=siteUrls;

const SettingContext=React.createContext(settings);
export default SettingContext;
