import BeautyBanner from '@/components/banner/beauty-banner';
import BeautyCategory from '@/components/categories/beauty-category';
import BeautyFeatured from '@/components/features/beauty-featured';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import InstagramAreaThree from '@/components/instagram/instagram-area-3';
import BeautyOfferBanner from '@/components/offer-banner/beauty-offer-banner';
import ProductArea from '@/components/products/beauty/product-area';
import ProductAreaTwo from '@/components/products/beauty/product-area-2';
import TrendingSpecialPrd from '@/components/products/beauty/trending-special-prd';
import SEO from "@/components/seo";
import BeautyTestimonial from '@/components/testimonial/beauty-testimonial';
import Footer from '@/layout/footers/footer';
import HeaderThree from '@/layout/headers/header-3';
import Wrapper from "@/layout/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle='Home'/>
      <HeaderThree/>
      <BeautyBanner/>
      <BeautyCategory/>
      <BeautyFeatured/>
      <ProductArea/>
      <BeautyOfferBanner/>
      <ProductAreaTwo/>
      <TrendingSpecialPrd/>
      <BeautyTestimonial/>
      <FeatureAreaTwo/>
      <InstagramAreaThree/>
      <Footer style_3={true} />
    </Wrapper>
  )
}
