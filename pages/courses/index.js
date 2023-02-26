//import fs from 'fs';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Courses.module.css';

import coursesData from '../../data.json';

const Courses = () => {
  const [courses, setCourses] = useState(coursesData);

  return (
    <>
      <h1>Courses</h1>
      <section id="courses" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center mb-4">Our Courses</h2>
            </div>
          </div>
          <div className="row">
            {courses.map((course, index) => (
              <div key={course.id} className={`col-md-6 ${index % 2 === 0 ? 'row' : ''}`}>
                <div className="card mb-4">
                  <div className="course-img">
                    <Image src={`/${course.image}`} alt="Online Courses Logo" className="card-img-top" height={350} width={200} />
                    <div className="img-overlay">
                      <a href={course.downloadLink} className="download-link"><FontAwesomeIcon icon={faSave} size="2x" /></a>
                      {<a href="#" className="view-link"><i className="far fa-eye"></i></a>}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <a href={course.downloadLink} className="btn btn-primary">Download</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;

// export async function getServerSideProps() {
//   const fileContents = fs.readFileSync('data.json', 'utf8');
//   const data = JSON.parse(fileContents);
//   return {
//     props: { data },
//   };
// }