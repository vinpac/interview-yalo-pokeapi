// A little function to link a input value to a state
// Ex.:
// const onInputChange = useMemo(() => inputLink(setInputValue), [setInputValue])
export const inputLink = (setState: (value: any) => void) => (
  e: React.ChangeEvent<any>,
) => {
  setState(e.target.value)
}
