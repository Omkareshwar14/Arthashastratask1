import React from 'react';
import { useTable } from 'react-table';
import { NavLink } from 'react-router-dom';

function Table() {

 const data = React.useMemo(
     () => [
       {
         col1: '1', 
         col2: '2004',
         col3: '1',
       },
       {
         col1: '2',
         col2: '2008',
         col3: '3',
       },
       {
         col1: '3',
         col2: '2012',
         col3: '6',
       },
       {
        col1: '4',
        col2: '2016',
        col3: '2',
      },
      {
        col1: '5',
        col2: '2020',
        col3: '7',
      }
     ],
     []
 )

 const columns = React.useMemo(
     () => [
       {
         Header: 'Id',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Year',
         accessor: 'col2',
       },
       {
         Header: 'Medals',
         accessor: 'col3', // accessor is the "key" in the data
       },
     ],
     []
 )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({ columns, data })

 return (
     <>

    <div style={{alignItems:"center", paddingLeft:"45vw"}}>
    <p className='navbar-brand'style={{userSelect:"none"}}> Table View </p>
    
    </div>
     <div className="container" style={{marginTop:"2.5vw" ,userSelect:"none" }}>
     <h1>Table View </h1>
      <NavLink className="text">
     
       <table {...getTableProps()} style={{ border: 'solid 1px black', borderRadius:"1vw" }}>
         <thead>
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps()}
                       style={{
                         borderBottom: 'solid 2px yellow',
                         color: '#BB2AC2',
                         textAlign:"center"
                       }}
                   >
                     {column.render('Header')}
                   </th>
               ))}
             </tr>
         ))}
         </thead>
         <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
               <tr {...row.getRowProps()}>
                 {row.cells.map(cell => {
                   return (
                       <td
                           {...cell.getCellProps()}
                           style={{
                             padding: '10px',
                             border: 'solid 3px green',
                           }}
                       >
                         {cell.render('Cell')}
                       </td>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </table>

       </NavLink>
      
      

    </div>
      
     </>
 );
}

export default Table;