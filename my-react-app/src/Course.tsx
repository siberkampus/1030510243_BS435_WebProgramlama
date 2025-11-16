import React from 'react'
type CourseType = {
  id: number;
  title: string;
  description: string;
  price: number;
  link: string;
  image: string;
};
function Course({course}:{ course: CourseType }){
    const {id,title,description,price,link,image}=course;

    return(
        <div className='course'>
            <div>
                <div>
                    <img src={image} alt=""width={250} />
                    <h4>{title}</h4>
                    <h5>{description}</h5>
                    <h3>{price}</h3>
                    <a href={link}>Satın AL</a>
                </div>
            </div>
        </div>
    )
}

export default Course