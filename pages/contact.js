import Link from 'next/link';

const Contact = () => (
    <div>
        <h1>Contact Page</h1>
        <nav>
            <ul>
                <li><Link href="/" legacyBehavior><a>Home</a></Link></li>
            </ul>
        </nav>
    </div>
);

export default Contact;