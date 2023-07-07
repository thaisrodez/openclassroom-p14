export function formatState(states) {
  return states.map((state) => ({
    key: state.name,
    name: state.name,
  }))
}
