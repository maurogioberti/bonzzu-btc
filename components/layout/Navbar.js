import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const navItems = [
        { label: 'Courses', path: '/courses' },
        { label: 'About', path: '/about' },
    ];
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                <Image src="/logo.png" alt="Online Courses Logo" height={50} width={50} />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        {
                            navItems.map(item => (
                                <li key={item.path} class="nav-item">
                                    <Link href={item.path} class="nav-link">
                                        {item.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    {/* <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log In</a>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar