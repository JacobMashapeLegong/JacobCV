import React from "react";

const courses = [
    {
        school:"University of Cape Town",
        course_name:"Bachelor of Science (Computer Science)",
        period:"2014 - 2019",
    }
];

export default function Education(){
    return (
        <section className="section">
            <h3 style={{margin:0}}>Education</h3>
            <div style={{marginTop:10}}>
                {courses.map((j,i)=>(
                    <div key={i} style={{marginBottom:12}}>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <strong>{j.course_name} — {j.school}</strong>
                            <span className="small">{j.period}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
