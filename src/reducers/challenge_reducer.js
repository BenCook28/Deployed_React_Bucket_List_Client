const bucketList = (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>Item</th>
        <th>Category</th>
        <th>Finish By</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Run a marathon</td>
        <td>fitness</td>
        <td>Otto</td>
        <td>12/31/17</td>
      </tr>
      <tr>
        <td>Create the application</td>
        <td>work</td>
        <td>12/31/17</td>
      </tr>
      <tr>
        <td>Finish novel</td>
        <td>literature</td>
        <td>12/31/17</td>
      </tr>
    </tbody>
  </Table>
);

ReactDOM.render(bucketList, mountNode);

export default ChallengeReducer;