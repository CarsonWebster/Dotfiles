const date = Variable('', {
  poll: [1000, 'date'],
})

const Bar = (monitor = 0) => Widget.Window({
  monitor,
  name: `bar${monitor}`,
  anchor: ['top', 'left', 'right'],
  child: Widget.Label({ label: date.bind() })
})

export default {
  windows: [
    // A list of all exported windows
    Bar(0),
    Bar(1),
  ],
}
