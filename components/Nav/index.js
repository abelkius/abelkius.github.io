import React from 'react';
import Link from 'next/link';
import '../root.css';
import './style.css';

export class Nav extends React.Component {
    pages = [
        { id: 'home', name: 'home', path: '/'},
        { id: 'blog', name: 'blog', path: '/blog'},
        { id: 'about', name: 'about', path: '/about'}
    ];

    render() {
        return (
            <nav className="nav">
                { this.pages.map((page) => (
                    <Link href={page.path} key={page.id}>
                         <span 
                            className={`nav-item${this.props.active === page.id ? ' active' : ''}`} 
                        >
                            {page.name} 
                        </span>
                    </Link>
                ))}
            </nav>
        );
    }
}

export default Nav;
