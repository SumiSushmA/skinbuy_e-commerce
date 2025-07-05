const ContactMap = () => {
  return (
    <>
      {/* Map Section */}
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.360991583803!2d85.3299792!3d27.706138399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2sSoftwarica%20College%20of%20IT%20and%20E-Commerce!5e0!3m2!1sen!2snp!4v1751517012825!5m2!1sen!2snp"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Softwarica College Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* FAQ Section */}
      <section className="tp-faq-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="tp-section-title-wrapper text-center mb-50">
                <h2 className="tp-section-title-2">Frequently Asked Questions</h2>
              </div>
              <div className="faq-wrapper">
                <details className="faq-item">
                  <summary className="faq-question">
                    What types of skincare products does SkinBuy offer?
                  </summary>
                  <div className="faq-answer">
                    <p>
                      We carry a curated selection of cleansers, toners, serums,
                      moisturizers, masks, and sunscreens—each chosen for
                      effectiveness, safety, and ingredient transparency.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    How can I track my order?
                  </summary>
                  <div className="faq-answer">
                    <p>
                      Once your order ships, you’ll receive an email with a
                      tracking number and link. You can also view all active
                      orders in your SkinBuy account under “My Orders.”
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    What is your return and refund policy?
                  </summary>
                  <div className="faq-answer">
                    <p>
                      If a product doesn’t work out, you can return unopened
                      items within 30 days for a full refund. Opened products
                      may qualify for store credit—just contact our support
                      team for details.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    Are your products cruelty-free and vegan?
                  </summary>
                  <div className="faq-answer">
                    <p>
                      Yes! All SkinBuy products are certified cruelty-free. Many
                      of our top-selling items are also vegan—just look for the
                      “V” badge on product pages.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    How do I choose the right products for my skin type?
                  </summary>
                  <div className="faq-answer">
                    <p>
                      Visit our “Shop or Product” page to know
                      about the product and choose as per your skin Type.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary className="faq-question">
                    Do you offer international shipping?
                  </summary>
                  <div className="faq-answer">
                    <p>
                      We ship worldwide! Shipping fees and delivery times vary
                      by location—see our Shipping Policy page for rates and
                      estimated transit times to your country.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scoped Styles */}
      <style jsx>{`
        .faq-wrapper {
          max-width: 100%;
        }
        .faq-item {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          margin-bottom: 20px;
          overflow: hidden;
        }
        .faq-question {
          list-style: none;
          font-size: 1.25rem; /* bigger question text */
          font-weight: 600;
          padding: 1rem 1.5rem;
          position: relative;
          cursor: pointer;
          color: #333;
        }
        /* hide default marker */
        .faq-question::-webkit-details-marker {
          display: none;
        }
        /* plus/minus toggle */
        .faq-question::after {
          content: '+';
          position: absolute;
          right: 1.5rem;
          font-size: 1.5rem;
          color: #821f40;
          transition: transform 0.2s ease;
        }
        /* when open, switch to minus */
        .faq-item[open] .faq-question::after {
          content: '-';
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          font-size: 1.1rem; /* slightly larger answer text */
          line-height: 1.6;
          color: #555;
        }
        details {
          transition: background-color 0.3s ease;
        }
        details[open] {
          background-color: #f9f9f9;
        }
      `}</style>
    </>
  );
};

export default ContactMap;