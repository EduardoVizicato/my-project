function Pessoa(props){
    return(
        <div>
            <img src={props.foto}></img>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}
export default Pessoa