"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Clock3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { CatalogCourse } from "@/server/catalog";

type CatalogCategory = { id: string; name: string; slug: string; courses: CatalogCourse[] };

export function CourseCatalog({ categories, databaseAvailable }: { categories: CatalogCategory[]; databaseAvailable: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");
  const visibleCourses = useMemo(() => categories.filter((category) => selectedCategory === "all" || category.slug === selectedCategory).flatMap((category) => category.courses).filter((course) => `${course.title} ${course.shortDescription}`.toLowerCase().includes(query.toLowerCase())), [categories, query, selectedCategory]);

  return (
    <>
      <div className="catalog-toolbar">
        <div className="catalog-categories" role="tablist" aria-label="Course categories">
          <button className={selectedCategory === "all" ? "catalog-tab active" : "catalog-tab"} type="button" role="tab" aria-selected={selectedCategory === "all"} onClick={() => setSelectedCategory("all")}>All courses</button>
          {categories.map((category) => <button className={selectedCategory === category.slug ? "catalog-tab active" : "catalog-tab"} key={category.id} type="button" role="tab" aria-selected={selectedCategory === category.slug} onClick={() => setSelectedCategory(category.slug)}>{category.name}<span>{category.courses.length}</span></button>)}
        </div>
        <label className="catalog-search"><Search size={17} aria-hidden="true" /><span className="sr-only">Search courses</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search courses" /></label>
      </div>

      {!databaseAvailable && <div className="catalog-state"><BookOpen size={22} /><div><strong>Unable to connect to the course service.</strong><p>Connect PostgreSQL and run the development seed to publish demo course records.</p><button className="catalog-retry" type="button" onClick={() => window.location.reload()}>Retry</button></div></div>}
      {databaseAvailable && visibleCourses.length === 0 && <div className="catalog-state"><BookOpen size={22} /><div><strong>No courses match this view.</strong><p>Try another category or search term.</p></div></div>}
      {visibleCourses.length > 0 && <div className="course-grid catalog-grid">{visibleCourses.map((course, index) => <article className={`course-card ${["orange", "charcoal", "cream"][index % 3]}`} key={course.id}><div className="course-visual course-visual-media"><Image src={course.imageUrl} alt={`${course.category.name}: ${course.title}`} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /><span className="course-index">{String(index + 1).padStart(2, "0")}</span><div className="course-shape" /></div><div className="course-body"><p>{course.category.name}</p><h3>{course.title}</h3><p className="catalog-description">{course.shortDescription}</p><div className="course-meta"><span><Clock3 size={15} /> {course.duration}</span><span><BookOpen size={15} /> {course.level} · {course.mode}</span></div><Link className="circle-link" href={`/courses/${course.slug}`} aria-label={`View ${course.title} course`}><ArrowUpRight size={18} /></Link></div></article>)}</div>}
    </>
  );
}
