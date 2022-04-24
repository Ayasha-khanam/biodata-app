const Biodata =(props) =>{
    return(
        <div className="bio-data">
            <h2>Biodata of {props.name}</h2>
            <div className="personal-info">
             <h2>Personal info of {props.name}</h2>
             <p>
                 name: {props.name}
             </p>
             <p>
                 email:{props.email}
             </p>
             <p>
                 phone:{props.mobile}
             </p>
            </div>

            <div className="Social-info">
             <h2>Personal info of {props.name}</h2>
             <p>
                 facebook: {props.facebook}
             </p>
             <p>
                 github:{props.github}
             </p>
             <p>
                 linkedIn:{props.linkedIn}
             </p>
            </div>

            <div className="skills">
             <h2>Skill  of {props.name}</h2>
             <ul>
                 {props.skills.map((skill)=>(
                     <li> {skill}</li>
                 ))}
             </ul>  
            </div>
            <div className="Interests">
             <h2>Interest of {props.name}</h2>
             <ul>
             {props.Interests.map((Interest)=>(
                     <li> {Interest}</li>
                 ))}
             </ul>  
            </div>
        </div>

    )
}
export default Biodata