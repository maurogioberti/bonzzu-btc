import fs from 'fs';
import Image from 'next/image';
import { useState } from 'react';
// import coursesData from '../data/courses.json';


const Courses = ({ data }) => {
  //const [courses, setCourses] = useState(coursesData);

  return (
    <>
      <h1>Courses</h1>
      <section id="courses" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-center mb-4">Our Courses</h2>
            </div>
          </div>
          <div class="row">
            {data.map((course, index) => (
              <div key={course.id} class={`col-md-6 ${index % 2 === 0 ? 'row' : ''}`}>
                <div class="card mb-4">
                  <div class="course-img">
                    <Image src={`/${course.image}`} alt="Online Courses Logo" class="card-img-top" height={350} width={200} />
                    <div class="img-overlay">
                      <a href={course.downloadLink} class="download-link"><i class="fas fa-save"></i></a>
                      {<a href="#" class="view-link"><i class="far fa-eye"></i></a>}
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{course.title}</h5>
                    <p class="card-text">{course.description}</p>
                    <a href={course.downloadLink} class="btn btn-primary">Download</a>
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

export async function getServerSideProps() {
  const fileContents = fs.readFileSync('data.json', 'utf8');
  const data = JSON.parse(fileContents);
  return {
    props: { data },
  };
}
