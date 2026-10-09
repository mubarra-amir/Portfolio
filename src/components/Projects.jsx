import { useRef, useEffect } from 'react';
import SectionLabel from './SectionLabel';
import FeaturedViz from './FeaturedViz';
import { projects } from '../data';
import styles from './Projects.module.css';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting){el.classList.add(styles.visible);obs.disconnect();} },{threshold:0.1});
    obs.observe(el); return () => obs.disconnect();
  }, []);

  const handleClick = () => { if(project.link && project.link !== '#') window.open(project.link,'_blank'); };

  if (project.featured) return (
    <div ref={ref} className={`${styles.card} ${styles.featured} ${styles.reveal}`}
      style={{transitionDelay:`${index*0.07}s`}} onClick={handleClick} data-hover>
      <div className={styles.featInfo}>
        <div className={styles.cardTop}>
          <span className={styles.num}>{project.id}</span>
          <div className={styles.tags}>{project.tags.map(t=><span key={t} className={styles.tag}>{t}</span>)}</div>
        </div>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.desc}>{project.desc}</p>
        <div className={styles.footer}><span className={styles.year}>{project.year}</span><div className={styles.arrow}>↗</div></div>
      </div>
      <div className={styles.featVisual}><FeaturedViz/></div>
    </div>
  );

  return (
    <div ref={ref} className={`${styles.card} ${styles.reveal}`}
      style={{transitionDelay:`${index*0.07}s`}} onClick={handleClick} data-hover>
      <div className={styles.cardTop}>
        <span className={styles.num}>{project.id}</span>
        <div className={styles.tags}>{project.tags.map(t=><span key={t} className={styles.tag}>{t}</span>)}</div>
      </div>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{project.desc}</p>
      <div className={styles.footer}><span className={styles.year}>{project.year}</span><div className={styles.arrow}>↗</div></div>
    </div>
  );
}

export default function Projects() {
  const headRef = useRef(null);
  useEffect(() => {
    const el = headRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting){el.classList.add(styles.visible);obs.disconnect();} },{threshold:0.1});
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <section className={styles.section} id="projects">
      <div ref={headRef} className={`${styles.header} ${styles.reveal}`}>
        <SectionLabel num="01" text="GitHub Projects"/>
        <p className={styles.heading}>Real work.<br/><em>Real code.</em></p>
      </div>
      <div className={styles.grid}>
        {projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}
      </div>
    </section>
  );
}