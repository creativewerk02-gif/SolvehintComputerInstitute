"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Clock3, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { getCourseSearchGroups } from "@/lib/content";
import { resolveCourseMedia } from "@/lib/media";
import type { CatalogCourse } from "@/server/catalog";

type CatalogCategory = { id: string; name: string; slug: string; courses: CatalogCourse[] };

export function CourseCatalog({ categories, databaseAvailable }: { categories: CatalogCategory[]; databaseAvailable: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");

  const categoryGroups = useMemo(() => getCourseSearchGroups(query, categories), [categories, query]);

  const tabs = useMemo(
    () =>
      (query ? categoryGroups : categories).map((category) => ({
        id: category.slug,
        name: category.name,
        count: category.courses.length,
      })),
    [categories, categoryGroups, query],
  );

  const visibleGroups = useMemo(
    () => (selectedCategory === "all" ? categoryGroups : categoryGroups.filter((group) => group.slug === selectedCategory)),
    [categoryGroups, selectedCategory],
  );

  const visibleCourses = useMemo(() => visibleGroups.flatMap((group) => group.courses.map((course) => ({ ...course, category: { name: group.name, slug: group.slug } }))), [visibleGroups]);

  return (
    <>
      <div className="catalog-toolbar">
        <div className="catalog-categories" role="tablist" aria-label="Course categories">
          <button className={selectedCategory === "all" ? "catalog-tab active" : "catalog-tab"} type="button" role="tab" aria-selected={selectedCategory === "all"} onClick={() => setSelectedCategory("all")}>All courses</button>
          {tabs.map((tab) => <button className={selectedCategory === tab.id ? "catalog-tab active" : "catalog-tab"} key={tab.id} type="button" role="tab" aria-selected={selectedCategory === tab.id} onClick={() => setSelectedCategory(tab.id)}>{tab.name}<span>{tab.count}</span></button>)}
        </div>
        <label className="catalog-search"><Search size={17} aria-hidden="true" /><span className="sr-only">Search courses</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search courses" /></label>
      </div>

      {!databaseAvailable && <div className="catalog-state"><BookOpen size={22} /><div><strong>Unable to connect to the course service.</strong><p>Connect PostgreSQL and run the development seed to publish demo course records.</p><button className="catalog-retry" type="button" onClick={() => window.location.reload()}>Retry</button></div></div>}
      {databaseAvailable && visibleCourses.length === 0 && <div className="catalog-state"><BookOpen size={22} /><div><strong>No courses match this view.</strong><p>Try another category or search term.</p></div></div>}
      {databaseAvailable && visibleCourses.length > 0 && (
        <div className="catalog-group-list">
          {visibleGroups.map((group) => (
            <section className="catalog-group" key={group.slug}>
              <div className="catalog-group-header">
                <div>
                  <p className="eyebrow">Category</p>
                  <h3>{group.name}</h3>
                </div>
                <span>{group.courses.length} courses</span>
              </div>

              <div className="course-grid catalog-grid">
                {group.courses.map((course, index) => {
                  const title = course.title;
                  const slug = typeof course.slug === "string" ? course.slug : title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  const shortDescription = course.shortDescription ?? "Practical learning designed to help you build confidence and real skills.";
                  const categoryName = group.name;
                  const image = resolveCourseMedia(title, categoryName);

                  return (
                    <article className={`course-card ${["orange", "charcoal", "cream"][index % 3]}`} key={`${group.slug}-${slug}`}>
                      <div className="course-visual course-visual-media">
                        <Image src={image} alt={`${categoryName}: ${title}`} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
                        <span className="course-index">{String(index + 1).padStart(2, "0")}</span>
                        <div className="course-shape" />
                      </div>
                      <div className="course-body">
                        <p>{categoryName}</p>
                        <h3>{title}</h3>
                        <p className="catalog-description">{shortDescription}</p>
                        <div className="course-meta"><span><Clock3 size={15} /> {course.duration ?? "8 weeks"}</span><span><BookOpen size={15} /> Beginner</span></div>
                        <Link className="circle-link" href={`/courses/${slug}`} aria-label={`View ${title} course`}><ArrowUpRight size={18} /></Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
