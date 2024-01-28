import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";

interface PrivacyPageProps { };

export const metadata: Metadata = {
  title: 'Privacy',
  description: `Read the ${siteConfig.name} Privacy Policy.`,
}

export default function PrivacyPage({ }: PrivacyPageProps) {
  return (
    <div className="prose dark:prose-invert mx-auto">
      <h1>Privacy Policy for {siteConfig.name}</h1>

      <p>
        {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides this Privacy Policy to inform you of our policies
and procedures regarding the collection, use and disclosure of personal information we may
        receive from users of our website (&ldquo;Site&rdquo;), accessible from <Link href={siteConfig.url}>{siteConfig.url}</Link>, and any
        other services offered by us in connection with our site (any and all of the foregoing the
        &ldquo;Services&rdquo;).
      </p>

      <p>
        If you have additional questions or require more information about our Privacy Policy, do
        not hesitate to contact us at{' '}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>

      <p>
        This Privacy Policy applies only to our online activities and is valid for visitors to our
        website with regards to the information that they shared and/or collect by {siteConfig.name}. This
        policy is not applicable to any information collected offline or via channels other than
        this website.
      </p>

      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>

      <h2>Information we collect</h2>

      <p>
        In the course of using the Services, we collect personally identifiable information, in
        the form of Persistent Identifiers, including IP Address. We collect and store this
        personal information solely for the purpose of providing support for the internal
        operations of our Services and our Site.
      </p>

      <h2>How we use your information</h2>

      <ul>
        <li>Provide, operate, and maintain our website</li>
        <li>
          Communicate with you, either directly or through one of our partners, including for
          customer service, to provide you with updates and other information relating to the
          website, and for marketing and promotional purposes(opt in).{' '}
        </li>
        <li>Find and prevent fraud</li>
      </ul>

      <h2>Log Files</h2>

      <p>
        {siteConfig.name} follows a standard procedure of using log files. These files log visitors when
        they visit websites. All hosting companies do this and a part of hosting service&apos;s
        analytics. The information collected by log files include internet protocol (IP)
        addresses, browser type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not linked to any
        information that is personally identifiable. The purpose of the information is for
        analyzing trends, administering the site, tracking user&apos;s movement on the website, and
        gathering demographic information.
      </p>

      <h2>Cookies and Web Beacons</h2>

      <p>
        Like any other website, {siteConfig.name} uses &ldquo;cookies&rdquo;. These cookies are used to store
        information including visitor&apos;s preferences, and the pages on the website that the visitor
        accessed or visited. The information is used to optimize the user&apos;s experience by
        customizing our web page content based on visitor&apos;s browser type and/or other information.
      </p>

      <h2>Advertising Partners Privacy Policies</h2>

      <p>
        You may consult this list to find the Privacy Policy for each of the advertising partners
        of {siteConfig.name}.
      </p>

      <p>
        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web
        Beacons that are used in their respective advertisements and links that appear on
        {siteConfig.name}, which are sent directly to user&apos;s browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the effectiveness of
        their advertising campaigns and/or to personalize the advertising content that you see on
        websites that you visit.
      </p>

      <p>
        Note that {siteConfig.name} has no access to or control over these cookies that are used by
        third-party advertisers.
      </p>

      <h2>Third Party Privacy Policies</h2>

      <p>
        {siteConfig.name}&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are
        advising you to consult the respective Privacy Policies of these third-party ad servers
        for more detailed information. It may include their practices and instructions about how
        to opt-out of certain options.
      </p>

      <p>
        You can choose to disable cookies through your individual browser options. To know more
        detailed information about cookie management with specific web browsers, it can be found
        at the browser&apos;s respective websites.
      </p>

      <h2>Links to Other Sites</h2>

      <p>
        Our services may contain links to other websites, applications, and online services. If
        you choose to visit a third party service or click on another third party link, you will
        be directed to that third party&apos;s website, application, or online service. The fact that
        we link to a website, content is not an endorsement, authorization or representation of
        our affiliation with that third party, nor is it an endorsement of their privacy or
        information security policies or practices. We do not exercise control over third party
        websites or services.
      </p>

      <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>

      <p>Under the CCPA, among other rights, California consumers have the right to:</p>
      <p>
        Request that a business that collects a consumer&apos;s personal data disclose the categories
        and specific pieces of personal data that a business has collected about consumers.
      </p>
      <p>
        Request that a business delete any personal data about the consumer that a business has
        collected.
      </p>
      <p>
        Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s
        personal data.
      </p>
      <p>
        If you make a request, we have one month to respond to you. If you would like to exercise
        any of these rights, please contact us at{' '}
        <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>

      <h2>Information Sharing</h2>

      <p>
        WE WILL NOT SHARE, SELL, RENT, OR TRADE YOUR PERSONAL INFORMATION WITH OTHER PARTIES
        EXCEPT AS PROVIDED BELOW:
      </p>

      <p>
        Personal Information: We may share personal information including IP Address, for the
        purpose of providing support for the internal operations of our services and our site.
      </p>
      <p>
        &ldquo;Support for the internal operations of our Services and our Site&rdquo; means activities
        necessary for the services or site to maintain or analyze its functioning; perform network
        communications; authenticate users or personalize content; ensure legal or regulatory
        compliance; or perform other usage analytics. Through our services and site, no other
        personal information is collected and the persistent identifiers are not used or disclosed
        to contact a specific individual.
      </p>

      <h2>International Transfer</h2>

      <p>
        Your information may be transferred to &mdash; and maintained on &mdash; computers located outside of
        your state, province, country or other governmental jurisdiction where the privacy laws
        may not be as protective as those in your jurisdiction. If you are located outside the
        United States and choose to provide information to us, we may transfer the personal
        information to the United States and processes it there. Use of our services or site
        represents your consent to this Privacy Policy and your agreement to that transfer.
      </p>

      <h2>GDPR Data Protection Rights</h2>

      <p>
        We would like to make sure you are fully aware of all of your data protection rights.
        Every user is entitled to the following:
      </p>
      <p>
        The right to access &mdash; You have the right to request copies of your personal data. We may
        charge you a small fee for this service.
      </p>
      <p>
        The right to rectification &mdash; You have the right to request that we correct any information
        you believe is inaccurate. You also have the right to request that we complete the
        information you believe is incomplete.
      </p>
      <p>
        The right to erasure &mdash; You have the right to request that we erase your personal data,
        under certain conditions.
      </p>
      <p>
        The right to restrict processing &mdash; You have the right to request that we restrict the
        processing of your personal data, under certain conditions.
      </p>
      <p>
        The right to object to processing &mdash; You have the right to object to our processing of your
        personal data, under certain conditions.
      </p>
      <p>
        The right to data portability &mdash; You have the right to request that we transfer the data
        that we have collected to another organization, or directly to you, under certain
        conditions.
      </p>
      <p>
        If you make a request, we have one month to respond to you. If you would like to exercise
        any of these rights, please contact us.
      </p>

      <h2>Children&apos;s Information</h2>

      <p>
        Another part of our priority is adding protection for children while using the internet.
        We encourage parents and guardians to observe, participate in, and/or monitor and guide
        their online activity.
      </p>

      <p>
        {siteConfig.name} does not knowingly collect any Personal Identifiable Information from children
        under the age of 13. If you think that your child provided this kind of information on our
        website, we strongly encourage you to contact us immediately and we will do our best
        efforts to promptly remove such information from our records.
      </p>

      <h2>Changes to This Privacy Policy</h2>

      <p>
        This Privacy Policy may be revised periodically, and this will be reflected by a &lsquo;Last
        modified&rsquo; date below. Thus, we advise you to review this page periodically for any
        changes. We will notify you of any changes by posting the new Privacy Policy on this page.
        These changes are effective immediately, after they are posted on this page.
      </p>

      <h2>Contact Information</h2>

      <p>
        Please contact us with any questions or comments about this Privacy Policy, Our Privacy
        Policy Toward Children, your personal information, and our third-party disclosure
        practices, at <Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link>.
      </p>

      <p>Last modified: 27th of January 2024</p>
    </div>
  );
};
