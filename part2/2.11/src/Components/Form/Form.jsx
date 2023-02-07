export default function Form({submit,handleName,handleNumber,name,number}){
  return(
    <form onSubmit={submit}>
        <div>
          name: <input onChange={handleName} value={name} /><br />
          number: <input onChange={handleNumber} value={number} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
  )
}