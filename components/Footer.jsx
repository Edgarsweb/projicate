import React from "react";
import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
// import {
//   PhoneOutlined,
//   InstagramOutlined,
//   LinkedinOutlined,
//   FacebookOutlined,
//   TwitterOutlined,
//   YoutubeOutlined,
//   MailOutlined,
//   WhatsAppOutlined,
// } from "@ant-design/icons";
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <div>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.phoneCall}>
          <Link href="https://wa.me/+79253807313">
            {/* <WhatsAppOutlined className={styles.hireIcon} /> */}
          </Link>
        </div>

        <div className={footerStyles.row}>
          <div className={footerStyles.footerBlock}>
          <Image src="/projicate_logo.png" alt="Projicate Logo" width={132} height={132} />
            <p className={footerStyles.footerDescription}>
             "Your dedicated IT Project Management and Digital Marketing Team in the routine of Digital Galaxy."
            </p>

            <div className={footerStyles.socialMedia}>
              {/* <a href="https://www.instagram.com/projicate/">
                <InstagramOutlined className={footerStyles.Insta} />
              </a>

                <a href="https://wa.me/+79253807313">
                < WhatsAppOutlined className={footerStyles.Whatsapp} />
              </a> */}

              {/* <a href="https://www.linkedin.com/company/edxweb/">
                <LinkedinOutlined className={footerStyles.Linkedin} />
              </a> */}

              {/* <a href="https://www.facebook.com/Edgarweb.site/">
                <FacebookOutlined className={footerStyles.Facebook} />
              </a> */}
            </div>
          </div>

          <div className={footerStyles.footerBlock}>
            <h6>Company</h6>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>

              {/* <li>
                <Link href="/services">Services</Link>
              </li> */}

              {/* <li>
                <Link href="/blog"> Blog</Link>
              </li> */}

              <li>
                <Link href="mailto:team.projicate@gmail.com">Contact</Link>
              </li>

              <li>
                <Link href="mailto:team.projicate@gmail.com">Hire a Specialist</Link>
              </li>

              <li>
                <Link href="mailto:team.projicate@gmail.com">Investor Relations</Link>
              </li>
            </ul>
          </div>

          {/* <div className={footerStyles.footerBlock}>
            <h6>Our Values</h6>
            <Link href="/work">Case Studies</Link>
            <Link href="/privacyPolicy">Privacy Policy</Link>
          </div> */}

          <div className={footerStyles.footerBlock}>
            <h6>Contact</h6>
            {/* <a href="tel:+1 716 221 86 86">+1 716 221 86 86</a> */}
            <a href="mailto:team.projicate@gmail.com">
              {/* <MailOutlined /> Send an Email */}
            </a>
            <p>
              Yerevan <br />
              Tigran Mets ave. 31 <br />
              Yerevan, Armenia, 0018
            </p>
          </div>
        </div>

        <div className={footerStyles.copyright}>
          <p className={footerStyles.copyrightText}>
            {" "}
            Copyright © 2023 <a href="https://www.projicate.vercel.app/">Projicate</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
