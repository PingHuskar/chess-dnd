export default (timeControls: any[]) => {
    const submit = timeControls.map(t => Number(t.status))
    const new_submit_asc = [...submit].sort((a, b) => a - b)
    const new_submit_desc = [...submit].sort((a, b) => a - b).reverse()
    return submit.toString() == new_submit_asc.toString() ||
        submit.toString() == new_submit_desc.toString()
}