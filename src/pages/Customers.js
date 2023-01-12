import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { dlt, dlt_All, getAll } from '../redux/actions/addTodoCreate';
function Customers() {
  const data = useSelector((state)=>state)
  let dispatch = useDispatch()
  useEffect(() => {
		dispatch(getAll());
		console.log(data);
	}, [dispatch]);
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Contact Title</th>
          <th>Contact Name</th>
          <th>Company Name</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
				{data &&
					data.map((tr) => (
						<tr key={tr.id}>
							<td>{tr.id}</td>
							<td>{tr.companyName}</td>
							<td>{tr.contactName}</td>
							<td>{tr.contactTitle}</td>
							<button onClick={() => dispatch(dlt(tr))}>Delete</button>
						</tr>
					))}
			</tbody>
    </table>
    </>
  )
}

export default Customers