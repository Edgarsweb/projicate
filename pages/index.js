import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import mainpic from "./images/mainimgg.png";
import handlepic from "./images/handleimg.png";
// import en from '../locales/en';
// import ru from '../locales/ru';
import { useRouter } from 'next/router';
// import {
//   FundOutlined ,
//   CodeOutlined,
//   StarOutlined,
//   FieldTimeOutlined,
//   DollarOutlined ,
//   UsergroupAddOutlined 
// } from "@ant-design/icons";


export default function Home() {
  const router = useRouter();
  const { locale } = router;
  // const t = locale === 'en' ? en : ru;
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Karta - Crypto prices and latest news</title>
        <meta name="description" content="The latest crypto news and prices platform" />
        <link rel="icon" href="/logobgr.png" />
      </Head>

      <div className={styles.mainCont}>

    
      <main className={styles.content}>
        <div className={styles.firstBlock}>
          <div className={styles.leftBlock}>
            <p className={styles.subTitle}>
              <b> WHO WE ARE</b>
            </p>
            <h1 className={styles.title}>
            <span>Proj</span>icate. You Trust, <span>We Handle ...</span>             
              </h1>
            <p className={styles.description}>
              Your ded<span>icate</span>d IT <span>Proj</span>ect Management and Digital Marketing Team in the routine of Digital Galaxy. 
            </p>
          

            <div className={styles.serviceLink}>
              <Link href="https://wa.me/+79253807313" className={styles.button}>
                Find your PM
              </Link>

          
            </div>
          </div>


          <div className={styles.mediaImage}>
            <Image src={mainpic} alt="main image" width="100%" height="100%" />
          </div>
        </div>

        {/* <div className={styles.ourData}>
          <div className={styles.dataBlock}>
          <CodeOutlined className={styles.dataIcon}/>
          <p>Technical Background</p>
       
          </div>
          <div className={styles.dataBlock}>
          <FundOutlined className={styles.dataIcon}/>
           <p>Full Automatation</p>
          </div>
          <div className={styles.dataBlock}>
          <DollarOutlined  className={styles.dataIcon}/> <p>Budgeting</p>
          </div>
          <div className={styles.dataBlock}>
          <FieldTimeOutlined  className={styles.dataIcon}/><p>Time Management</p>
          </div>
          <div className={styles.dataBlock}>
          <UsergroupAddOutlined className={styles.dataIcon}/>
           <p>Happy Stakeholders</p>
          </div>
          <div className={styles.dataBlock}>
            {" "}
            <h2>56+</h2> <p>eCommerce Solutions</p>
          </div>
        </div> */}

    

        <div className={styles.darkBgr}>
          <div className={styles.secondBlock}>
            <div className={styles.rightBlock}>
              <Image
                src={handlepic}
                alt="main image"
                width="100%"
                height=""
              />
            </div>
            <div className={styles.leftBlock}>
              <p className={styles.subTitle}>
                <b>HOW WE DO IT</b>
              </p>
              <h2 className={styles.title}>
                <span>Our </span> Strategy
              </h2>
              <p className={styles.description}>
              Our Project Managers provide a structured and organized framework for successfully completing your projects. Our work helps to streamline processes, enhance collaboration, and improve the likelihood of achieving project goals within the specified constraints of time, budget, and scope.
              </p>
              <div className={styles.serviceLink}>
                <Link href="mailto:team.projicate@gmail.com" className={styles.button}>
                  Schedule a Call
               
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br />

        {/* <div className={styles.firstBlock}>
          <div className={styles.leftBlock}>
            <p className={styles.subTitle}>
              <b>WHY CHOOSE US</b>
            </p>
            <h3 className={styles.title}>Working with us gives you benefits</h3>
            <div className={styles.benefits}>
              <h5>
                <SendOutlined className={styles.sendIcon} /> Awesome Support
              </h5>
              <p>
                Our support team works 24/7. We work with different timezones
                from US to Asia.
              </p>
            </div>
            <div className={styles.benefits}>
              <h5>
                <SendOutlined className={styles.sendIcon} /> Financial Advise
              </h5>
              <p>
                If you have limited budget, our sales manager can count and pick
                for you a good website project with affordable price.{" "}
              </p>
            </div>
            <div className={styles.benefits}>
              <h5>
                <SendOutlined className={styles.sendIcon} /> SEO Optimized
              </h5>
              <p>
                All our clients get their orders SEO optimized. It is our
                company policy{" "}
              </p>
            </div>
          </div>

          <div className={styles.mediaImage}>
            <Image src={chooseus} alt="main image" width="100%" height="100%" />
          </div>
        </div> */}
        {/* <Team /> */}
        <div className={styles.whatPeopleSay}>
          <p className={styles.subTitle}>
            <b>TESTIMONIALS</b>
          </p>
          <h6>What People Say</h6>
          <div className={styles.testimonials}>
            <figure className={styles.snip1192}>
              <blockquote>
                <div className={styles.stars}>
                  {" "}
                  {/* <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined /> */}
                </div>
                <i>
                  {" "}
                  We have been trying to put together our long-term project requirements and
                  affordable project management cost. I am happy to say we finally hired the
                  Projicate Fteam and they have worked closely with us throughout
                  the process, staying on task, on target, and on budget. I also
                  appreciate their quick and courteous responses. I highly
                  recommend their service!
                </i>
                <p>
                  Alexander Sh. | CPO at{" "}
                  <b>
                    <a href="https://www.rentcararm.com/">RentcarArm LLC </a>{" "}
                  </b>{" "}
                </p>
              </blockquote>
              <div className={styles.author}>
                {/* <Image
                  src={alexBryce}
                  alt="testimonial image"
                  width="100%"
                  height="100%"
                /> */}
              </div>
            </figure>
            <figure className={styles.snip1192}>
              <blockquote>
                <div className={styles.stars}>
                  {" "}
                  {/* <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined />
                  <StarOutlined /> */}
                </div>
                <i>
                  {" "}
                  Our agency has been using Projicate services for the last four
                  months. Their PMs have been a professional and committed partners
                  who have taken responsibility for the partnership. Under tight
                  deadlines and with high expectations, Projicate was a pleasure to
                  partner with. I would not hesitate in recommending them to
                  other agencies.
                </i>

                <p>
                  Maria A. | CEO at{" "}
                  <b>
                    <a href=" https://www.algoschool.co/">Algoschool </a>{" "}
                  </b>{" "}
                </p>
              </blockquote>
              <div className={styles.author}>
                {/* <Image
                  src={Jane}
                  alt="testimonial image"
                  width="100%"
                  height="100%"
                /> */}
              </div>
            </figure>
          </div>
        </div>
 
      </main>
      </div>


    </div>
  );
}
