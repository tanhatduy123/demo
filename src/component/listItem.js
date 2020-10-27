import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles((theme) => ({
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Tổng quan" />
                <Tab label="Công việc và học vấn" />
                <Tab label="Nơi từng sống" />
                <Tab label="Thông tin liên hệ và cơ bản" />
                <Tab label="Gia đình và các mối quan hệ" />
                <Tab label="Chi tiết về bạn" />
                <Tab label="Sự kiện trong đời" />
            </Tabs>
        </div>
    );
}
