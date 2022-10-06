import React from 'react'
const SideBar = (props) => {

   const TableData = props.setTableData;

  return (
    <div>
      {
        <React.Fragment>
          <table>
          <thead>
          <tr>
          <th>
                Name
                </th>
              <th>
                Email
              </th>
              <th>
                Phone
              </th>
              <th>
                Address
              </th>
          </tr>  
            </thead>
            <tbody>

              {
                TableData.map((feild, index) => (
                   <React.Fragment key={index}>
                    <tr key={index}>
                      <td>
                        {feild.name}
                      </td>
                      <td>
                        {feild.email}
                      </td><td>
                        {feild.phone}
                      </td><td>
                        {feild.address}
                      </td>
                    </tr>
                  </React.Fragment>
                ))
              }

            </tbody>
          </table>
        </React.Fragment>
      }

    </div>
  )
}

export default SideBar