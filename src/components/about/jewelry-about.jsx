import Image from 'next/image';
import Link from 'next/link';
// internal
import { ArrowRightLong } from '@/svg';
import about_img from '@assets/img/about/about-1.jpg';
import about_thumb from '@assets/img/about/about-2.jpg';

const JewelryAbout = () => {
  return (
    <>
      <section className="tp-about-area pt-125 pb-180">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tp-about-thumb-wrapper p-relative mr-35">
                <div className="tp-about-thumb m-img">
                  <Image src={about_img} alt="about_img" />
                </div>
                <div className="tp-about-thumb-2">
                  <Image src={about_thumb} alt="about_thumb" />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="tp-about-wrapper pl-80 pt-75 pr-60">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <span className="tp-section-title-pre-4">Unity Collection</span>
                  <h3 className="tp-section-title-4 fz-50">Shop our limited Edition Collaborations</h3>
                </div>
                <div className="tp-about-content pl-120">
                  <p>             At SkinBuy, we’re passionate about helping you achieve healthy, glowing skin.
                  From gentle cleansers and nourishing serums to hydrating moisturizers, our
                  expertly curated collections are designed to address every skin concern.
                  Browse our range of dermatologist-approved products and elevate your daily
                  routine with the very best in skincare innovation.</p>

                  <div className="tp-about-btn">
                    <Link href="/contact" className="tp-btn">
                      Contact Us{" "}<ArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JewelryAbout;