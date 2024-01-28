import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'ToS',
  description: `Read the ${siteConfig.name} Terms of Service.`,
}

interface TosPageProps { };

export default function TosPage({ }: TosPageProps) {
  return (
    <div className="prose dark:prose-invert mx-auto">
      <h1>Terms and Conditions</h1>

      <h2>1. Terms</h2>

      <p>
        By accessing this Website, accessible from <Link href={siteConfig.url}>{siteConfig.url}</Link>, 
        you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are 
        responsible for the agreement with any applicable local laws. If you disagree with any of these terms, 
        you are prohibited from accessing this site. The materials contained in this Website are
        protected by copyright and trade mark law.
      </p>

      <h2>2. Use License</h2>

      <p>
        Permission is granted to download the materials (information or software) on {siteConfig.name}&apos;s website for personal, 
        non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
      </p>

      <ul>
        <li>modify or copy the materials;</li>
        <li>use the materials for any commercial purpose or for any public display;</li>
        <li>attempt to reverse engineer any software contained on {siteConfig.name}&apos;s Website;</li>
        <li>remove any copyright or other proprietary notations from the materials; or</li>
        <li>transfer the materials to another person or &ldquo;mirror&rdquo; the materials on any other server.</li>
      </ul>

      <p>
        This license shall automatically terminate if you violate any of these restrictions and may be terminated by 
        {siteConfig.name} or any of its affiliated Companies at any time. Upon terminating your viewing of these materials 
        or upon the termination of this license, you must destroy any downloaded materials in your possession whether in 
        electronic or printed format.
      </p>

      <h2>3. Disclaimer</h2>

      <p>
        All the materials on {siteConfig.name}&apos;s Website are provided &ldquo;as is&rdquo;. {siteConfig.name} makes no
        warranties, may it be expressed or implied, therefore negates all other warranties.
        Furthermore, {siteConfig.name} does not make any representations concerning the accuracy or
        reliability of the use of the materials on its Website or otherwise relating to such
        materials or any sites linked to this Website.
      </p>

      <h2>4. Limitations</h2>

      <p>
        {siteConfig.name} or its suppliers will not be hold accountable for any damages that will arise
        with the use or inability to use the materials on {siteConfig.name}&apos;s Website, even if {siteConfig.name} or
        an authorized representative of this Website has been notified, orally or written, of the
        possibility of such damage. Some jurisdiction does not allow limitations on implied
        warranties or limitations of liability for incidental damages, these limitations may not
        apply to you.
      </p>

      <h2>5. Revisions and Errata</h2>

      <p>
        The materials appearing on {siteConfig.name}&apos;s Website may include technical, typographical, or
        photographic errors. {siteConfig.name} will not promise that any of the materials in this Website
        are accurate, complete, or current. {siteConfig.name} may change the materials contained on its
        Website at any time without notice. {siteConfig.name} does not make any commitment to update the
        materials.
      </p>

      <h2>6. Links</h2>

      <p>
        {siteConfig.name} has not reviewed all of the sites linked to its Website and is not responsible
        for the contents of any such linked site. The presence of any link does not imply
        endorsement by {siteConfig.name} of the site. The use of any linked website is at the user&apos;s own
        risk.
      </p>

      <h2>7. Site Terms of Use Modifications</h2>

      <p>
        {siteConfig.name} may revise these Terms of Use for its Website at any time without prior notice.
        By using this Website, you are agreeing to be bound by the current version of these Terms
        and Conditions of Use.
      </p>

      <h2>8. Your Privacy</h2>

      <p>Please read our <Link href="/privacy">Privacy Policy</Link>.</p>

      <h2>9. Governing Law</h2>

      <p>
        Any claim related to {siteConfig.name}&apos;s Website shall be governed by the laws of af without
        regards to its conflict of law provisions.
      </p>
    </div>
  );
};
