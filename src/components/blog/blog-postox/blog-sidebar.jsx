import Image from 'next/image';
import Link from 'next/link';
// internal
import blogData from '@/data/blog-data';
import { Search } from '@/svg';
import signature from '@assets/img/blog/signature/signature.png';
import user from '@assets/img/users/user-11.jpg';

// latest post
const latest_post = blogData.slice(0,3)

const BlogSidebar = () => {
  return (
    <>
      <div className="tp-sidebar-wrapper tp-sidebar-ml--24">
        <div className="tp-sidebar-widget mb-35">
          <div className="tp-sidebar-search">
            <form action="#">
              <div className="tp-sidebar-search-input">
                <input type="text" placeholder="Search..." />
                <button type="submit">
                  <Search/>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* about  */}
        <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">About me</h3>
          <div className="tp-sidebar-widget-content">
            <div className="tp-sidebar-about">
              <div className="tp-sidebar-about-thumb mb-25">
                <a href="#">
                  <Image src={user} alt="user" />
                </a>
              </div>
              <div className="tp-sidebar-about-content">
                <h3 className="tp-sidebar-about-title">
                  <a href="#">Prasanna {"Poudel"}</a>
                </h3>
                <span className="tp-sidebar-about-designation">Photographer & Blogger</span>
                <p>    Hi, I’m Prasanna Poudel. As a licensed esthetician with over 7 years’ experience,
    I’ve guided hundreds of clients to healthier, glowing skin. Here at SkinBuy
    I share honest product reviews, expert tips, and customized routines so you
    can feel confident in your complexion every day.</p>
                <div className="tp-sidebar-about-signature">
                  <Image src={signature} alt="signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- about end --> */}

        {/* <!-- latest post start --> */}
        <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">Latest Posts</h3>
          <div className="tp-sidebar-widget-content">
            <div className="tp-sidebar-blog-item-wrapper">
              {latest_post.map(b => (
              <div key={b.id} className="tp-sidebar-blog-item d-flex align-items-center">
                <div className="tp-sidebar-blog-thumb">
                  <Link href={`/blog-details/${b.id}`}>
                    <Image src={b.img} alt="blog img" />
                  </Link>
                </div>
                <div className="tp-sidebar-blog-content">
                  <div className="tp-sidebar-blog-meta">
                    <span>{b.date}</span>
                  </div>
                  <h3 className="tp-sidebar-blog-title">
                    <Link href={`/blog-details/${b.id}`}>{b.title}</Link>
                  </h3>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- latest post end --> */}

        {/* <!-- categories start --> */}
        <div className="tp-sidebar-widget widget_categories mb-35">
          <h3 className="tp-sidebar-widget-title">Categories</h3>
          <div className="tp-sidebar-widget-content">
            <ul>
              <li><Link href="/blog">Gloss <span>(12)</span></Link></li>
              <li><Link href="/blog">Foundation <span>(6)</span></Link></li>
              <li><Link href="/blog">Cream <span>(2)</span></Link></li>
              <li><Link href="/blog">Cloth <span>(8)</span></Link></li>
              <li><Link href="/blog">Highliter <span>(0)</span></Link></li>
              <li><Link href="/blog">Blush <span>(3)</span></Link></li>
            </ul>
          </div>
        </div>
        {/* <!-- categories end --> */}

        {/* <!-- tag cloud start --> */}
        <div className="tp-sidebar-widget mb-35">
          <h3 className="tp-sidebar-widget-title">Popular Tags</h3>
          <div className="tp-sidebar-widget-content tagcloud">
            <a href="#">Summer</a>
            <a href="#">Vintage</a>
            <a href="#">Sunglasses</a>
            <a href="#">Makeup</a>
            <a href="#">Lifesttyle</a>
            <a href="#">Natural Product</a>
          </div>
        </div>
        {/* <!-- tag cloud end --> */}

      </div>
    </>
  );
};

export default BlogSidebar;