type PerformanceRowProps = {
artist :string,
startTime : string,
duration  : number
}
function PerformanceRow({artist,startTime,duration}:PerformanceRowProps){
    return(
       <table>
  <thead>
    <tr>
      <th>Start Time</th>
      <th>Artist</th>
      <th>Duration</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>{startTime}</td>
      <td>{artist}</td>
      <td>{duration} min</td>
    </tr>
  </tbody>
</table>
    )
}
export default PerformanceRow;