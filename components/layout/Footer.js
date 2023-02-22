import Image from "next/image"

const Footer = () => {
    return (
        <footer class="bg-light py-3">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <Image src="/logo.png" alt="Online Courses Logo" height={50} width={50} />
                        <span> &copy; 2023 Online Courses</span>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-inline text-right">
                            <li class="list-inline-item">
                                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer