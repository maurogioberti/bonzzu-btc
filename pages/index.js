export default function Home() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-4 primary-color">Welcome to our online courses!</h1>
            <p className="lead secondary-color">Choose from a variety of online courses on a wide range of topics.</p>
            <div className="embed-responsive embed-responsive-16by9">
            <video controls>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
            <p></p>
            <a className="btn btn-primary" href="#" role="button">Browse Courses</a>
        </div>
      </div>
    </>
  )
}