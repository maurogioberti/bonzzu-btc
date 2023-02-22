export default function Home() {
  return (
    <>
      <div class="jumbotron jumbotron-fluid text-center">
        <div class="container">
            <h1 class="display-4 primary-color">Welcome to our online courses!</h1>
            <p class="lead secondary-color">Choose from a variety of online courses on a wide range of topics.</p>
            <div class="embed-responsive embed-responsive-16by9">
            <video controls>
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
            <p></p>
            <a class="btn btn-primary" href="#" role="button">Browse Courses</a>
        </div>
      </div>
    </>
  )
}