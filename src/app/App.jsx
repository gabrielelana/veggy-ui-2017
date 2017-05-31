import ReactDOM from 'react-dom'
import MainContainer from './main'
import ws from '../redux/webSocketStream.js'

ws.connect()

ReactDOM.render(<MainContainer />, document.getElementById('app'))
