const Controls = ({startDisabled, onStart}) => (
  <div className="column">
    <div className="box">
        <div className="block">
          <button id="startButton" disabled={startDisabled} onClick={onStart} className="button is-primary is-large">Start</button>
        </div>
    </div>
  </div>
)

Controls.defaultProps = {
  startDisabled: false,
  onStart: () => {},
}

export default Controls