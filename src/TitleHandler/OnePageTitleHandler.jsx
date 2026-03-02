import { useEffect, useRef, useState } from 'react';

function OnePageTitleHandler() {
    const sections = [
        { id: 'home', title: 'Home | My Portfolio' },
        { id: 'about', title: 'About | My Portfolio' },
        { id: 'skills', title: 'Skills | My Portfolio' },
        { id: 'projects', title: 'Projects | My Portfolio' },
        { id: 'contact', title: 'Contact | My Portfolio' },
    ];

    const [currentTitle, setCurrentTitle] = useState('Home | My Portfolio');

    const sectionRefs = useRef({});

    useEffect(() => {
        sections.forEach(section => {
            sectionRefs.current[section.id] = document.getElementById(section.id);
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const found = sections.find(s => s.id === entry.target.id);
                        if (found) setCurrentTitle(found.title);
                    }
                });
            },
            { threshold: 0.5 } // 50% of section must be visible
        );

        Object.values(sectionRefs.current).forEach(el => {
            if (el) observer.observe(el);
        });

        return () => {
            Object.values(sectionRefs.current).forEach(el => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    useEffect(() => {
        document.title = currentTitle;
    }, [currentTitle]);

    return null; // invisible component
}

export default OnePageTitleHandler;
