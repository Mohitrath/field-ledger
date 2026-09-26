import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import Mark from "@/components/Mark";
export const metadata: Metadata = { title:"Field Ledger — Impact & Sustainability Media Intelligence", description:"Turn field photos and videos into searchable, source-backed evidence and impact reports." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><header className={`${styles.header} app-chrome`}><Link href="/" className={styles.brand}><span className={styles.mark} aria-hidden><Mark /></span><span><span className={styles.brandName}>Field Ledger</span><span className={styles.brandTag}>evidence intelligence, built on Cloudinary</span></span></Link></header><main className={styles.main}>{children}</main></body></html>;
}