import moment from 'moment'

const TaskList = ({timers}) => {
  const rows = timers.map(t => <TaskRow key={t.id} {...t} />)
  return (
    <div className="column is-one-third">
      <table className="table">
        <thead>
          <tr>
            <th>Started at</th>
            <th>Description</th>
            <th className="centered">Status</th>
          </tr>
        </thead>
        <tbody>
         {rows}
        </tbody>
      </table>
    </div>
  )
}

TaskList.defaultProps = {
  timers: []
}

function TaskRow(props){
  return (
    <tr>
      <td>{moment(props.startedAt).format('DD-MM-YYYY hh:mm:ss')}</td>
      <td>{props.description}</td>
      <td className="centered">{getStatusIcon(props.status)}</td>
    </tr>)
}

const statuses = {
  'started': 'pi-pomodoro-ticking',
  'completed': 'pi-pomodoro-done',
  'squashed': 'pi-pomodoro-squashed'
}

function getStatusIcon(status){
  return <span className="icon"><i className={statuses[status]}></i></span>  
}

export default TaskList