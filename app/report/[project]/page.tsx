import { notFound } from "next/navigation";
import Link from "next/link";
import {
  listAssets,
  listComparisonPairs,
  listProjects,
} from "@/lib/store";
import { detailView } from "@/lib/cloudinaryClient";
import PrintButton from "@/components/PrintButton";
import styles from "./report.module.css";

export default async function ReportPage({
  params,
}: {
  params: { project: string };
}) {
  const project = decodeURIComponent(params.project);

  const [assets, pairs, projects] = await Promise.all([
    listAssets({ project }),
    listComparisonPairs(project),
    listProjects(),
  ]);

  const summary = projects.find((p) => p.name === project);

  if (!summary) {
    notFound();
  }

  const complete = pairs.filter((p) => p.before && p.after);

  return (
    <div className={styles.page}>
      <div className={`${styles.toolbar} app-chrome`}>
        <Link
          href={`/projects/${encodeURIComponent(project)}`}
          className={styles.back}
        >
          ← Back to project
        </Link>
        <PrintButton />
      </div>

      <article className={styles.report}>
        <header className={styles.cover}>
          <div className={styles.coverEyebrow}>
            Impact &amp; Sustainability Report
          </div>
          <h1 className={styles.coverTitle}>{project}</h1>
          <p className={styles.coverMeta}>{summary.locations.join(" · ")}</p>

          {assets[0] && (
            <img
              className={styles.coverImage}
              src={detailView(assets[0].secureUrl)}
              alt=""
            />
          )}
        </header>

        <section className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{summary.assetCount}</span>
            <span className={styles.statLabel}>Assets collected</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>{complete.length}</span>
            <span className={styles.statLabel}>Before / after pairs</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>{summary.locations.length}</span>
            <span className={styles.statLabel}>Locations documented</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Documented change</h2>

          {complete.map((p) => (
            <div key={p.pairId} className={styles.pairCard}>
              <div className={styles.pairImages}>
                <img
                  src={detailView(p.before!.secureUrl)}
                  alt="Before"
                />
                <img
                  src={detailView(p.after!.secureUrl)}
                  alt="After"
                />
              </div>
              <p className={styles.pairLocation}>{p.location}</p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Evidence gallery</h2>

          <div className={styles.gallery}>
            {assets.map((a) => (
              <figure key={a.id} className={styles.galleryItem}>
                <img
                  src={detailView(a.secureUrl)}
                  alt={a.aiCaption ?? ""}
                />
                <figcaption>
                  {a.aiCaption ?? "No caption available"}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
