import React from "react";

import { Grommet, Box, DataTable, Text, Meter } from "grommet";
//import { grommet } from "grommet/themes";

//import { columns, DATA } from "./data";

// const TunableDataTable = () => (
//     <Box align="center" pad="large">
//       <DataTable
//         columns={columns.map(c => ({
//           ...c,
//           search: c.property === "name" || c.property === "location"
//         }))}
//         data={DATA}
//         resizeable
//       />
//     </Box>
// );

class TableTest2 extends React.Component {
    render() {
        return (
            <Box align="center" pad="large">
            {/* <DataTable
                columns={columns.map(c => ({
                ...c,
                search: c.property === "name" || c.property === "location"
                }))}
                data={DATA}
                resizeable
            /> */}
            <DataTable
                columns={[
                    {
                    property: 'name',
                    header: <Text>Name</Text>,
                    primary: true,
                    },
                    {
                    property: 'percent',
                    header: 'Complete',
                    render: datum => (
                        <Box pad={{ vertical: 'xsmall' }}>
                        <Meter
                            values={[{ value: datum.percent }]}
                            thickness="small"
                            size="small"
                        />
                        </Box>
                    ),
                    },
                ]}
                data={[
                    { name: 'Alan', percent: 20 },
                    { name: 'Bryan', percent: 30 },
                    { name: 'Chris', percent: 40 },
                    { name: 'Eric', percent: 80 },
                ]}
                />
            </Box>
        )
    }
}

export default TableTest2