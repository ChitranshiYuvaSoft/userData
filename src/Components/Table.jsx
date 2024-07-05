import React from 'react'
import TableData from './TableData'
import { useSelector } from 'react-redux'

const Table = () => {

    const {allData} = useSelector(state=> state.data);

    return (
        <table className={allData.length !== 0 ? "table py-4 overflow-y-scroll  h-[25rem] " : "hidden table py-4 overflow-y-scroll  h-[25rem] " }>
            <thead className=''>
                <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Note</th>
                    <th scope="col">Language</th>
                    <th scope="col">Hobby</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    allData.map((data, index) => <TableData data={data} key={index} index={index}/>)
                }
            </tbody>
        </table>
    )
}

export default Table