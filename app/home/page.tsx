"use server";
import DefaultHeader from "@/app/components/header/DefaultHeader";
import Seo from "../components/common/Seo";
import Hero from "@/app/components/common/Hero";
import Services from "@/app/components/common/Services";
import CopyrightFooter from "@/app/components/common/CopyrightFooter";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <>
      <Seo pageTitle="Home" />
      <DefaultHeader />;
      <Hero />
      <div className="col-lg-6" data-aos="fade-right">
        <div className="title-style-one text-center text-lg-start">
          <h2 className="main-title fw-normal tx-dark m0">
            Bine ai revenit <span>{user.name} </span> {user.surrname}
          </h2>
        </div>
        {/* /.title-style-one */}
      </div>
      <div className="fancy-feature-nineteen position-relative pt-170 pb-160 lg-pt-100 lg-pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-normal tx-dark m0">
                  Activitatiile <span>Tale </span> De Azi.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
            {/* End .col-lg-6 */}

            <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0 ps-xxl-4">
                Dorim sa iti dispunem toate informatiile necesare la un click
                distanta.
              </p>
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xxl-5 pt-60 lg-pt-20">
            <Services />
          </div>
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
      </div>
      <div className="footer-style-two theme-basic-footer">
        {/*<div className="top-footer position-relative">*/}
        {/*  <div className="container">*/}
        {/*    <div className="inner-wrapper m-auto">*/}
        {/*      <div className="row">*/}
        {/*        <FooterMenu />*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    /!* /.inner-wrapper *!/*/}
        {/*  </div>*/}
        {/*  <div className="shapes shape-one rounded-circle" />*/}
        {/*  <div className="shapes shape-two rounded-circle" />*/}
        {/*  <img*/}
        {/*      src="/images/shape/shape_42.svg"*/}
        {/*      alt="shape"*/}
        {/*      className="lazy-img shapes shape-three"*/}
        {/*  />*/}
        {/*  <img*/}
        {/*      src="/images/shape/shape_43.svg"*/}
        {/*      alt="shape"*/}
        {/*      className="lazy-img shapes shape-four"*/}
        {/*  />*/}
        {/*</div>*/}
        {/*/!* /.top-footer *!/*/}
        <CopyrightFooter />
      </div>
    </>
  );
};

export default Home;
