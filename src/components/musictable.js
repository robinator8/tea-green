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

class MusicTable extends React.Component {
    render() {
        const { columns, data, onClickRow } = this.props
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
                columns={columns}
                data={data}
                onClickRow={onClickRow}
                />
            </Box>
        )
    }
}

// COLUMN EXAMPLE
// [
//     {
//         property: 'name',
//         header: <Text>Name</Text>,
//         primary: true,
//         },
//         {
//         property: 'percent',
//         header: 'Complete',
//         render: datum => (
//             <Box pad={{ vertical: 'xsmall' }}>
//             <Meter
//                 values={[{ value: datum.percent }]}
//                 thickness="small"
//                 size="small"
//             />
//             </Box>
//         ),
//         },
//     ]
// DATA EXAMPLE
// [
//     { name: 'Alan', percent: 20 },
//     { name: 'Bryan', percent: 30 },
//     { name: 'Chris', percent: 40 },
//     { name: 'Eric', percent: 80 },
// ]

export default MusicTable