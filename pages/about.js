import Link from 'next/link';

const About = () => (
    <div>
        <h1>About Page</h1>
        <nav>
            <ul>
                <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
            </ul>
        </nav>
    </div>
);

export default About;
