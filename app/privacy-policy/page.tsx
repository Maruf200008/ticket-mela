import Image from "next/image";
import Link from "next/link";
import check from "../images/privecy-policy/checked.png";

export default function page() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center flex-col my-10 mx-auto p-4">
      <div className=" w-full space-y-6">
        <div className=" space-y-2">
          <h1 className=" text-xl font-bold">Who is Ticket Mela</h1>
          <p className=" text-neutral-600">
            The First Multiplex Cinema Theatre in Bangladesh, Ticket Mela is the
            brand name of Show Motion Limited, pioneered in modern Multiplex
            Movie Theater industry in the country. With lucid vision for the
            entertainment development in the country, the local and foreign
            promoters of Show Motion Limited started the first international
            quality state-of-the-art multiplex cinema theatre on 8th October
            2004 in Bangladesh at Bashundhara City Mall, Panthapath, Dhaka.
          </p>
        </div>
        <div className=" space-y-2">
          <h1 className=" text-xl font-bold">Our Policy</h1>
          <p className=" text-neutral-600">
            Welcome to the web site (the “Site”) of Ticket Mela
            (ticketmela.com). This Site is operated by Ticket Mela and has been
            created to provide information about our company, whether accessible
            to you via web, mobile app or other platform (our services, together
            with the Site, are the “Services”) by visitors and users of the
            Services (“you” and/or “your”). Ticket Mela collects information
            about you when you use our mobile applications, websites, and other
            online products and services (collectively, the “Services”) and
            through other interactions and communications you have with Ticket
            Mela. Please read this privacy policy carefully so that you
            understand how we will treat your information. By using any of our
            Services, you confirm that you have read, understood and agree to
            this privacy policy. If you do not agree to this policy, please do
            not use any of the Services. If you have any queries, please email
            us at{" "}
            <Link href="/" className=" text-primary">
              customerservices@ticketmela.com
            </Link>
          </p>
        </div>
        <div className=" space-y-2">
          <h1 className=" text-xl font-bold">Scope and Application</h1>
          <p className=" text-neutral-600">
            This Privacy Statement (“Statement”) applies to persons anywhere in
            the world who use our apps, websites, platforms, technologies to
            request Ticket Mela Services.
          </p>
        </div>
        <div className=" space-y-2">
          <h1 className=" text-xl font-bold">Information We Collect</h1>
          <p className=" text-neutral-600">
            When you interact with us through the Services, we collect
            information about you in the following general categories:
          </p>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Location Information. As a condition of providing Users with
              nearby Movie Theater Location, or other services via the STAR
              Cineplex platform, your precise location data must be provided to
              STAR Cineplex via the app that that you use. Once the STAR
              Cineplex app has permission to access location services through
              the permission system used by your mobile operating system
              (“platform”), we will collect the precise location of your device
              when the app is running in the foreground or background. We may
              also derive your approximate location from your IP address.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Contacts Information. If you permit the STAR Cineplex app to
              access the address book on your device via the permission system
              used by your platform, we may access and store names and contact
              information from your address book to facilitate social
              interactions through our Services and for other purposes described
              in this Statement or at the time of consent or collection.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Transaction Information: We collect transaction details related to
              the movie tickets or concession items (or other) services you
              provide through our platform, including the type of service
              provided, date and time the service was provided, amount charged,
              and other related transaction details. Additionally, if someone
              uses your promo code, we may associate your name with that person.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Usage and Preference Information. We collect information about how
              you and site visitors interact with our Services, preferences
              expressed, and settings chosen. In some cases we do this through
              the use of cookies, pixel tags, and similar device identification
              technologies that create and maintain unique identifiers. To learn
              more about these technologies, please see our Cookie Statement.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Device Information. We may collect information about your mobile
              device, including, for example, the hardware model, operating
              system and version, software and file names and versions,
              preferred language, unique device identifier, advertising
              identifiers, serial number, device motion information, and mobile
              network information.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Call and SMS Data. Our Services facilitate communications between
              Users and our Customer Service Agent. In connection with
              facilitating this service, we receive call data, including the
              date and time of the call or SMS message, the parties’ phone
              numbers, and the content of the SMS message.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Log Information. When you interact with the Services, we collect
              server logs, which may include information like device IP address,
              access dates and times, app features or pages viewed, app crashes
              and other system activity, type of browser, and the third-party
              site or service you were using before interacting with our
              Services. Any other personal information which you give us in
              connection with the Services.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Non-Identifiable Data. When you interact with STAR Cineplex
              through the Services, we receive and store certain information
              which does not identify you personally. Such information is
              collected passively using various technologies.
            </p>
          </div>
          <div className="">
            <p>
              Wherever Ticket Mela collects Personal Data we make an effort to
              provide a link to this Privacy Policy. By voluntarily providing us
              with Personal Data, you are consenting to our use of it in
              connection with the Services and in accordance with this Privacy
              Policy. Ticket Mela may store such information itself or such
              information may be included in databases owned and maintained by
              Ticket Mela ’s affiliates, agents or service providers. The
              Services may use such information and pool it with other
              information on an anonymized and generalized basis to track, for
              example, the total number of users of our Services, the number of
              visitors to each page of our Site and the domain names of our
              visitors’ Internet service providers. It is important to note that
              no Personal Data is available or used in this process.
            </p>
          </div>
        </div>
        <div className=" space-y-2">
          <h1 className=" text-xl font-bold">Use of Information</h1>
          <p className=" text-neutral-600">
            By providing us with the information about you discussed above, you
            consent for us and our subsidiaries and affiliates (the “Ticket Mela
            Related Companies”) to use that information in the following ways:
          </p>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To maintain, and improve our Services, including, for example, to
              facilitate payments, send receipts, provide products and services
              you request (and send related information), develop new features,
              provide customer support to Users and Workers, develop safety
              features, authenticate users, and send product updates and
              administrative messages.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To perform internal operations, including, for example, to prevent
              fraud and abuse of our Services; to troubleshoot software bugs and
              operational problems; to conduct data analysis, testing, and
              research; and to monitor and analyze usage and activity trends.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To implement and monitor any STAR Cineplex bookings which you make
              using our Services;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To share your Personal Data with Ticke professionals in order to
              carry out your STAR Cineplex bookings using our Services;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To ensure that content from our Services is presented in the most
              effective manner for you and for your computer or other device
              from which you access the Services;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To provide you with information, products or services that you
              request from us or which we feel may interest you;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To carry out our obligations arising from any contracts between
              you and us;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To allow you to participate in interactive features of our
              Services, when you choose to do so;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To notify you about changes to our Services;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To improve or modify the Services, for example based on how you
              use our Services;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To calculate conversion rates and other elements of Services’
              performance;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              For marketing purposes (which we discuss further below).
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To personalize and improve the Services, including to provide or
              recommend features, content, social connections, referrals, and
              advertisements.
            </p>
          </div>
        </div>
        <div className=" space-y-2">
          <h1 className=" text-xl font-bold">Sharing of Information</h1>
          <p className=" text-neutral-600">
            Ticke Mela is not in the business of selling your information. We
            consider this information to be a vital part of our relationship
            with you. There are, however, certain circumstances in which we may
            share your Personal Data with certain third parties, as set out
            below:
          </p>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              With other people, as directed by you, in connection with a
              particular service, offering or promotion; or with third parties
              to provide you a service you requested through a partnership or
              promotional offering made by a third party or us.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              With Workers to enable them to provide the Services you request.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              To implement and monitor any STAR Cineplex bookings which you make
              using our Services;
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              With the general public if you submit content in a public forum,
              such as blog comments, social media posts, or other features of
              our Services that are viewable by the general public.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              With third parties with whom you choose to let us share
              information, for example other apps or websites that integrate
              with our API or Services, or those with an API or Service with
              which we integrate.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              With third parties to provide you a service you requested through
              a partnership or promotional offering made by a third party or us.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Business Transfers: As we develop our business, we might sell or
              buy businesses or assets. In the event of a corporate sale,
              merger, reorganization, dissolution or similar event, Personal
              Data may be part of the transferred assets.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Related Companies: We may also share your Personal Data with the
              STAR Cineplex Related Companies if we need to do so to fulfil this
              Privacy Policy.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Agents, Consultants and Related Third Parties: STAR Cineplex, like
              many businesses, sometimes hires other companies to perform
              certain business-related functions. Examples of such functions
              include mailing information, maintaining databases and processing
              payments. When we employ another company to perform a function of
              this nature, we only provide them with the information that they
              need to perform their specific function and under the same
              standards and protections as in this privacy policy.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Legal Requirements: STAR Cineplex may disclose your Personal Data
              if required to do so by law or in the good faith belief that such
              action is necessary to (i) comply with a legal obligation, (ii)
              protect and defend the rights or property of STAR Cineplex, (iii)
              act in urgent circumstances to protect the personal safety of
              users of the Services or the public, or (iv) protect against legal
              liability.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Aggregated Personal Data: In an ongoing effort to better
              understand and serve the users of the Services, STAR Cineplex
              conducts research on its user demographics, interests and behavior
              based on the Personal Data and other information provided to us.
              This research will be compiled and analyzed on an aggregate basis,
              and Ticket Mela may share this aggregate data with its affiliates,
              agents and business partners. This aggregate information does not
              identify you personally. Ticket Mela may also disclose aggregated
              user statistics in order to describe our Services to current and
              prospective business partners, and to other third parties for
              other lawful purposes in fulfilment of this privacy policy.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Marketing and advertising: Ticket Mela and its affiliates may use
              Personal Data to contact you in the future to tell you about
              services we believe will be of interest to you. If we do so, each
              communication we send you will contain instructions permitting you
              to “opt-out” of receiving future communications. In addition, if
              at any time you wish not to receive any future communications or
              you wish to have your name deleted from our mailing lists, please
              contact us as indicated below.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              The Services may integrate with social sharing features and other
              related tools which let you share actions you take on our Services
              with other apps, sites, or media, and vice versa. Your use of such
              features enables the sharing of information with your friends or
              the public, depending on the settings you establish with the
              social sharing service. Please refer to the privacy policies of
              those social sharing services for more information about how they
              handle the data you provide to or share through them.
            </p>
          </div>
          <div>
            <p>
              {" "}
              With law enforcement officials, government authorities, or other
              third parties if we believe your actions are inconsistent with our
              user agreements or policies, or to protect the rights, property,
              or safety of STAR Cineplex. In connection with, or during
              negotiations of, any merger, sale of company assets, consolidation
              or restructuring, financing, or acquisition of all or a portion of
              our business by or into another company. We do not disclose
              personal information about identifiable individuals to
              advertisers, but we may provide them with aggregate and/or
              anonymized information about our users to help advertisers reach
              the kind of audience they want to target. We may make use of the
              information we have collected from you to enable us to comply with
              our advertisers’ wishes by displaying their advertisement to that
              target audience.
            </p>
          </div>
        </div>
        <div className=" space-y-2">
          <h1 className=" text-xl font-bold">Your Choices:</h1>

          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              You can visit the Services without providing any Personal Data. If
              you choose not to provide any Personal Data, you may not be able
              to use certain STAR Cineplex Services.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Account Details. You may correct your account information at any
              time by logging into your online or in-app account. If you wish to
              cancel your account, please email us at
              customerservices@cineplexbd.com. Please note that in some cases we
              may retain certain information about you as required by law, or
              for legitimate business purposes to the extent permitted by law.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Access Rights, STAR Cineplex will comply with individual’s
              requests regarding access, correction, and/or deletion of the
              personal data it stores in accordance with applicable law.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Location Details, we request permission for our app’s collection
              of precise location from your device as per the permission system
              used by your mobile operating system. If you initially permit the
              collection of this information, you can later disable it by
              changing the location settings on your mobile device. However, you
              may not be able to avail certain services on the STAR Cineplex App
              if you disable our collection of precise location data.
              Additionally, disabling our collection of precise location from
              your device will not limit our ability to derive approximate
              location from your IP address.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Contact Details, we may also seek permission for our app’s
              collection and syncing of contact information from your device as
              per the permission system used by your mobile operating system.{" "}
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Contact Details, we may also seek permission for our app’s
              collection and syncing of contact information from your device as
              per the permission system used by your mobile operating system.
            </p>
          </div>
          <div className=" grid grid-cols-12">
            <div className=" w-[50px] col-span-1 mt-1">
              <Image src={check} alt="check" width={16} />
            </div>
            <p className=" col-span-11 ml-[-75px]">
              Promotions and News Alerts, you may opt out of receiving
              promotional messages from us by following the instructions in
              those messages. If you opt out, we may still send you
              non-promotional communications, such as those about your account,
              about Services you have requested, or our ongoing business
              relations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
