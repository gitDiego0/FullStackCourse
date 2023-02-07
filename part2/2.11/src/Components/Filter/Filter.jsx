

export default function Filter({value,setFilter}){
  
  
  return (
    <>

    <span>filter shown with </span><input onChange={setFilter} value={value} />
    </>
  )
}