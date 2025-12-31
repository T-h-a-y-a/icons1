import React, { useState, useEffect } from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LoadingScreen from "./components/loading/loading-screen";
import Navbar from "./components/nav";
import Footer from "./components/Footer";
// import Service from "./pages/service";
import DataAnalysis from "./pages/service/data-analysis-service/data-analysis";
import DataTransformation from "./pages/service/data-analysis-service/data-transformation";
import DataMonetization from "./pages/service/data-analysis-service/data-monetization";
import DataStrategy from "./pages/service/data-analysis-service/data-strategy";
import DataGovernance from "./pages/service/data-analysis-service/data-governance";
import DataManagement from "./pages/service/data-analysis-service/data-managment";
import DataOps from "./pages/service/data-analysis-service/dataops";
import DataEngineering from "./pages/service/data-analysis-service/data-engineering";
import DataMining from "./pages/service/data-analysis-service/data-mining-and-visual-analytics";
import PredictiveAnalytics from "./pages/service/data-analysis-service/predictive-analytics";
import SurveyAnalytics from "./pages/service/data-analysis-service/survey-analytics";
import FinancialAnalytics from "./pages/service/data-analysis-service/financial-analytics";
import RetailAnalytics from "./pages/service/data-analysis-service/retail-analytics";
import BusinessIntelligence from "./pages/service/data-analysis-service/business-intelligence";
import RiskAnalytics from "./pages/service/data-analysis-service/risk-analytics";
import StatisticalAnalytics from "./pages/service/data-analysis-service/statistical-analytics";
import SocialMediaVideoEditing from "./pages/service/video-editing-service/social-media-video-editing";
import VideoEditingService from "./pages/service/video-editing-service/video-editing-service";
import VideoEditingServices from "./pages/service/video-editing-service/video-editing-services";
import WeddingVideoEditing from "./pages/service/video-editing-service/wedding-video-editing";
import RealEstateVideoEditing from "./pages/service/video-editing-service/real-estate-video-editing";
import CorporateVideoEditing from "./pages/service/video-editing-service/corporate-video-eEditing";
import EducationalVideoEditing from "./pages/service/video-editing-service/educational-video-editing";
import SportsVideoEditing from "./pages/service/video-editing-service/sports-video-editing";
import TravelVlogVideoEditing from "./pages/service/video-editing-service/travel-vlog-video-editing";
import PodcastVideoEditing from "./pages/service/video-editing-service/podcast-video-editing";
import GoProVideoEditing from "./pages/service/video-editing-service/gopro-video-editing";
import EcommerceVideoEditing from "./pages/service/video-editing-service/ecommerce-video-editing";
import VideoReTouchingVideoEditing from "./pages/service/video-editing-service/video-re-touching-video-editing";
import BrandingVideoEditing from "./pages/service/video-editing-service/branding-video-editing";
import RealEstateDroneVideoEditing from "./pages/service/video-editing-service/real-estate-drone-video-editing";
import VFXandCompostingServices from "./pages/service/video-editing-service/vfx-and-composing-service";
import VFXAnimationServices from "./pages/service/video-editing-service/vfx-animation-services";
import RotoscopingServices from "./pages/service/video-editing-service/rotoscoping-services";
import MotionGraphicsServices from "./pages/service/video-editing-service/motion-graphics-services";
import RiggingServices from "./pages/service/video-editing-service/rigging-services";
import TrackingMatchmoveServices from "./pages/service/video-editing-service/tracking-matchmove";
import Threedvisualeffects from "./pages/service/video-editing-service/3d-visual-effects";
import SimulationEffects from "./pages/service/video-editing-service/simulation-effects";
import MattePainting from "./pages/service/video-editing-service/matte-painting";
import Twodcompositing from "./pages/service/video-editing-service/2d-compositing";
import Threedcompositing from "./pages/service/video-editing-service/3d-compositing";
import Keyingservices from "./pages/service/video-editing-service/keying-services";
import RigRemoval from "./pages/service/video-editing-service/rig-removal";
import Animations from "./pages/service/video-editing-service/animations";
import AnimationRotoscopingServices from "./pages/service/video-editing-service/animation-rotoscoping-services";
import MotionGraphicDesign from "./pages/service/video-editing-service/motion-graphic-design";
import ProductAnimation from "./pages/service/video-editing-service/product-animation";
import TwodAnimation from "./pages/service/video-editing-service/2d-animation";
import ThreedAnimation from "./pages/service/video-editing-service/3d-animation";
import DigitalMarketing from "./pages/service/digital-marketing/digital-marketing";
import Seo from "./pages/service/digital-marketing/seo";
import SearchEngineMarketing from "./pages/service/digital-marketing/search-engine-marketing";
import SearchMediaMarketing from "./pages/service/digital-marketing/search-media-marketing";
import ContentMarketingServices from "./pages/service/digital-marketing/content-marketing-services";
import EmailMarketing from "./pages/service/digital-marketing/email-marketing";
import WebsiteDesignDevelopment from "./pages/service/digital-marketing/website-design-development";
import CroServices from "./pages/service/digital-marketing/cro-services";
import CroppingServices from "./pages/service/video-editing-service/cropping-services";
import VideoClippingServices from "./pages/service/video-editing-service/video-clipping-services";
import StopMotionAnimation from "./pages/service/video-editing-service/stop-motion-animation";
import CreativesServices from "./pages/service/creatives-services/creatives-services";
import Healthcare from "./pages/service/healthcare/healthcare";
import DentalXRayImaging from "./pages/service/healthcare/dental-x-ray-imaging-services";
import BoneDensityScanning from "./pages/service/healthcare/bone-density-scanning";
import PETCTScanning from "./pages/service/healthcare/pet-ct-Scanning";
import CTInterpretationServices from "./pages/service/healthcare/ct-interpretation-services";
import EmergencyRadiology from "./pages/service/healthcare/emergency-radiology";
import MedicalImagingServices from "./pages/service/healthcare/medical-imaging-services";
import ThoracicImaging from "./pages/service/healthcare/thoracic-imaging";
import Careers from "./pages/careers/career";
import Softwaredevelopment from "./pages/service/software-development/software";
import EndToEnd from "./pages/service/software-development/end-to-end";
import ECommerceDevelopment from "./pages/service/software-development/ecommerce_development";
import CustomApplicationDevelopment from "./pages/service/software-development/custom_application_development";
import ContactPage from "./pages/contact/contacts";
import Datamanagementservices from "./pages/service/data-management/data-management";
import Dataentryservices from "./pages/service/data-management/data-entry-services";
import DataConversionServices from "./pages/service/data-management/data-conversion-services";
import EbookandePub from "./pages/service/data-management/e_bookande_pub";
import OcrServices from "./pages/service/data-management/ocr-services";
import DataExtraction from "./pages/service/data-management/data-extraction";
import DataProcessing from "./pages/service/data-management/data-processing";
import DataCollectionServices from "./pages/service/data-management/data-collection-services";
import DataDeduplicationServices from "./pages/service/data-management/data-deduplication-services";
import DataModernizationServices from "./pages/service/data-management/data-modernization-services";
import FinancialDataProcessing from "./pages/service/data-management/financial-data-processing-services";
import FormsProcessing from "./pages/service/data-management/forms-processing-services";
import SurveyDataProcessing from "./pages/service/data-management/survey-processing-services";
import EcommerceDataEntry from "./pages/service/data-management/ecommerce-data-entry";
import DataCleansingServices from "./pages/service/data-management/data-cleansing-service";
import DataCleanup from "./pages/service/data-management/data-clean-up-services";
import DataValidationServices from "./pages/service/data-management/data-validation-services";
import DataMergingServices from "./pages/service/data-management/data-merging-services";
import DataEnhancementServices from "./pages/service/data-management/data-enhancement-services";
import DataMiningServices from "./pages/service/data-management/data-mining-services";
import WebDataMiningServices from "./pages/service/data-management/web-data-mining-services";
import SQLDataMining from "./pages/service/data-management/sql-data-mining";
import ImageDataMining from "./pages/service/data-management/image-data-mining";
import ExcelDataMining from "./pages/service/data-management/excel-data-mining";
import WordDataMining from "./pages/service/data-management/word-data-mining";
import PDFDataMining from "./pages/service/data-management/pdf-data-mining";
import OpenSourceDataExtraction from "./pages/service/data-management/open-source-data-extraction";
import GraphicDesignServices from "./pages/service/creatives-services/graphic-design-services";
import LogoDesignServices from "./pages/service/creatives-services/logo-design-services";
import AnimatedLogoDesign from "./pages/service/creatives-services/animated-logo-design";
import ThreeDLogoDesignServices from "./pages/service/creatives-services/threed-logo-design";
import LogoCleanup from "./pages/service/creatives-services/logo-cleanup";
import BusinessLogoDesign from "./pages/service/creatives-services/business-logo-design-services";
import BrandLogoDesign from "./pages/service/creatives-services/brand-logo-design-services";
import IllustratedLogoDesign from "./pages/service/creatives-services/illustrated-logo-design-services";
import BrandingDesignServices from "./pages/service/creatives-services/branding-design-services";
import ProductPackagingDesign from "./pages/service/creatives-services/product-packaging-design";
import BrochurePackagingDesign from "./pages/service/creatives-services/brochure-packaging-design";
import BusinessCardDesigns from "./pages/service/creatives-services/business-card-design";
import FlyerDesigns from "./pages/service/creatives-services/flyer-design";
import MenuDesigns from "./pages/service/creatives-services/menu-design";
import PrintDesigns from "./pages/service/creatives-services/print-designs";
import ArtDesigns from "./pages/service/creatives-services/art-designs";
import MagazineDesigns from "./pages/service/creatives-services/magazine-design-services";
import PowerPointDesign from "./pages/service/creatives-services/powerpoint-design-sevices";
import InDesignService from "./pages/service/creatives-services/indesign-sevices";
import IllustrationServices from "./pages/service/creatives-services/illustration-services";
import ArtworkServices from "./pages/service/creatives-services/artwork-services";
import ScrollOnRouteChange, { ScrollToTopButton } from "./components/Scroll/Scroll";
import About from "./pages/about";
// import Cursor from "./components/cursor";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate 2-second load time (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <BrowserRouter>
      <ScrollOnRouteChange />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        
        {/* <Route path="/service" element={<Service />} /> */}
        <Route path="/service/data-analysis-services" element={<DataAnalysis />} />
        <Route path="/service/data-analysis-service/data-transformation" element={<DataTransformation />} />
        <Route path="/service/data-analysis-service/data-monetization" element={<DataMonetization />} />
        <Route path="/service/data-analysis-service/data-strategy" element={<DataStrategy />} />
        <Route path="/service/data-analysis-service/data-governance" element={<DataGovernance />} />
        <Route path="/service/data-analysis-service/data-management" element={<DataManagement />} />
        <Route path="/service/data-analysis-service/dataops" element={<DataOps />} />
        <Route path="/service/data-analysis-service/data-engineering" element={<DataEngineering />} />
        <Route path="/service/data-analysis-service/data-mining-and-visual-analytics" element={<DataMining />} />
        <Route path="/service/data-analysis-service/predictive-analytics" element={<PredictiveAnalytics />} />
        <Route path="/service/data-analysis-service/survey-analytics" element={<SurveyAnalytics />} />
        <Route path="/service/data-analysis-service/financial-analytics" element={<FinancialAnalytics />} />
        <Route path="/service/data-analysis-service/retail-analytics" element={<RetailAnalytics />} />
        <Route path="/service/data-analysis-service/business-intelligence" element={<BusinessIntelligence />} />
        <Route path="/service/data-analysis-service/risk-analytics" element={<RiskAnalytics />} />
        <Route path="/service/data-analysis-service/statistical-analytics" element={<StatisticalAnalytics />} />

        {/* Video Editing Service */}
        <Route path="/service/video-editing-services" element={<VideoEditingServices />} />
        <Route path="/service/video-editing-services/video-editing-service" element={<VideoEditingService />} />
        <Route path="/service/video-editing-service/social-media" element={<SocialMediaVideoEditing />} />
        <Route path="/service/video-editing-service/wedding" element={<WeddingVideoEditing />} />
        <Route path="/service/video-editing-service/real-estate" element={<RealEstateVideoEditing />} />
        <Route path="/service/video-editing-service/corporate" element={<CorporateVideoEditing />} />
        <Route path="/service/video-editing-service/educational" element={<EducationalVideoEditing />} />
        <Route path="/service/video-editing-service/sports" element={<SportsVideoEditing />} />
        <Route path="/service/video-editing-service/travel-vlog" element={<TravelVlogVideoEditing />} />
        <Route path="/service/video-editing-service/podcast" element={<PodcastVideoEditing />} />
        <Route path="/service/video-editing-service/gopro" element={<GoProVideoEditing />} />
        <Route path="/service/video-editing-service/ecommerce" element={<EcommerceVideoEditing />} />
        <Route path="/service/video-editing-service/video-retouching" element={<VideoReTouchingVideoEditing />} />
        <Route path="/service/video-editing-service/branding" element={<BrandingVideoEditing />} />
        <Route path="/service/video-editing-service/real-estate-drone" element={<RealEstateDroneVideoEditing />} />
        <Route path="/services/video-editing-services/cropping-services" element={<CroppingServices />} />
        <Route path="/services/video-editing-services/clipping-services" element={<VideoClippingServices />} />

        {/* VFX and Composting Services */}
        <Route path="/service/video-editing-services/vfx-composting-services" element={<VFXandCompostingServices />} />
        <Route path="/services/vfx-composting-services/vfx-animation" element={<VFXAnimationServices />} />
        <Route path="/services/vfx-composting-services/rotoscoping" element={<RotoscopingServices />} />
        <Route path="/services/vfx-composting-services/motion-graphics" element={<MotionGraphicsServices />} />
        <Route path="/services/vfx-composting-services/rigging-services" element={<RiggingServices />} />
        <Route path="/services/vfx-composting-services/tracking-matchmove-services" element={<TrackingMatchmoveServices />} />
        <Route path="/services/vfx-composting-services/3d-visual" element={<Threedvisualeffects />} />
        <Route path="/services/vfx-composting-services/simulation-effects-services" element={<SimulationEffects />} />
        <Route path="/services/vfx-composting-services/matte-painting-services" element={<MattePainting />} />
        <Route path="/services/vfx-composting-services/2d-compositing-services" element={<Twodcompositing />} />
        <Route path="/services/vfx-composting-services/3d-compositing-services" element={<Threedcompositing />} />
        <Route path="/services/vfx-composting-services/keying-services" element={<Keyingservices />} />
        <Route path="/services/vfx-composting-services/rig-removal-services" element={<RigRemoval />} />

        {/* Animations */}
        <Route path="/services/video-editing-services/animations" element={<Animations />} />
        <Route path="/services/animation-services/rotoscoping-services" element={<AnimationRotoscopingServices />} />
        <Route path="/services/animation-services/3d-animation-services" element={<ThreedAnimation />} />
        <Route path="/services/animation-services/motion-grarphic-design-services" element={<MotionGraphicDesign />} />
        <Route path="/services/animation-services/product-animation-services" element={<ProductAnimation />} />
        <Route path="/services/animation-services/2d-animation-services" element={<TwodAnimation />} />
        <Route path="/services/animation-services/stop-motion-animation-services" element={<StopMotionAnimation />} />

        {/* Digital Marketing */}
        <Route path="/service/digital-marketing-services" element={<DigitalMarketing />} />
        <Route path="/services/digital-marketing-services/outsource-seo-services"  element={<Seo />} />
        <Route path="/services/digital-marketing-services/sem-services" element={<SearchEngineMarketing />} />
        <Route path="/services/digital-marketing-services/social-media-marketing-services" element={<SearchMediaMarketing />} />
        <Route path="/services/digital-marketing-services/content-creation-services" element={<ContentMarketingServices />} />
        <Route path="/services/digital-marketing-services/email-marketing-services" element={<EmailMarketing />} />
        <Route path="//services/digital-marketing-services/web-development-services" element={<WebsiteDesignDevelopment />} />
        <Route path="/services/digital-marketing-services/cro-services" element={<CroServices />} />

        {/* Creatives Services */}
        <Route path="/services/creatives-services" element={<CreativesServices />} />
        <Route path="/services/creatives-services/graphic-design-services" element={<GraphicDesignServices />} />
        <Route path="/services/creatives-services/graphic-design-services/logo-design-services" element={<LogoDesignServices />} />
        <Route path="/services/creatives-services/logo-design-services/animated" element={<AnimatedLogoDesign />} />
        <Route path="/services/creatives-services/logo-design-services/3d" element={<ThreeDLogoDesignServices />} />
        <Route path="/services/Creatives-services/logo-design-services/logo-cleanup" element={<LogoCleanup />} />
        <Route path="/services/Creatives-services/logo-design-services/business" element={<BusinessLogoDesign />} />
        <Route path="/services/Creatives-services/logo-design-services/brand" element={<BrandLogoDesign />} />
        <Route path="/services/Creatives-services/logo-design-services/illustrated" element={<IllustratedLogoDesign />} />
        <Route path="/services/creatives-services/graphic-design-services/branding-design-services" element={<BrandingDesignServices />} />
        <Route path="/services/creatives-services/branding-design-services/product-packaging-design" element={<ProductPackagingDesign />} />
        <Route path="/services/creatives-services/branding-design-services/brochure-packaging-design" element={<BrochurePackagingDesign />} />
        <Route path="/services/creatives-services/branding-design-services/business-card-design" element={<BusinessCardDesigns />} />
        <Route path="/services/creatives-services/branding-design-services/flyer-design" element={<FlyerDesigns />} />
        <Route path="/services/creatives-services/branding-design-services/menu-design" element={<MenuDesigns />} />
        <Route path="/services/creatives-services/graphic-design-services/print-design" element={<PrintDesigns />} />
        <Route path="/services/creatives-services/graphic-design-services/art-design" element={<ArtDesigns />} />
        <Route path="/services/creatives-services/magazine-design-services" element={<MagazineDesigns />} />
        <Route path="/services/creatives-services/powerpoint-design-services" element={<PowerPointDesign />} />
        <Route path="/services/creatives-services/indesign-services" element={<InDesignService />} />
        <Route path="/services/creatives-services/illustration-services" element={<IllustrationServices />} />
        <Route path="/services/Creatives-services/artwork-services" element={<ArtworkServices />} />
        

        {/* Healthcare */}
        <Route path="/services/healthcare" element={<Healthcare />} />
        <Route path="/services/healthcare/dental-imaging-solutions" element={<DentalXRayImaging />} />
        <Route path="/services/healthcare/bone-density-scanning" element={<BoneDensityScanning />} />
        <Route path="/services/healthcare/medical-imaging-services" element={<MedicalImagingServices />} />
        <Route path="/services/healthcare/pet-ct-reporting" element={<PETCTScanning />} />
        <Route path="/services/healthcare/ct-interoretation-services" element={<CTInterpretationServices />} />
        <Route path="/services/healthcare/emergency-radiology-report" element={<EmergencyRadiology />} />
        <Route path="/services/healthcare/thoracic-imaging-services" element={<ThoracicImaging />} />

        {/* Software Development */}
        <Route path="/services/software-development-services" element={<Softwaredevelopment />} />
        <Route path="/services/software-development-services/software-solutions" element={<EndToEnd />} />
        <Route path="/services/software-development-services/ecommerce-development-services" element={<ECommerceDevelopment />} />
        <Route path="/services/software-development-services/custom-application-development" element={<CustomApplicationDevelopment />} />


        {/* Data Management */}
        <Route path="/services/data-management-services" element={<Datamanagementservices />} />
        <Route path="/services/data-management-services/data-entry-services" element={<Dataentryservices />} />
        <Route path="/services/data-management-services/data-conversion-services" element={<DataConversionServices />} />
        <Route path="/services/data-management-services/ebook-conversion-services" element={<EbookandePub />} />
        <Route path="/services/data-management-services/data-cleaning-services" element={<DataCleansingServices />} />
        <Route path="/services/data-management-services/ocr-services" element={<OcrServices />} />
        <Route path="/services/data-management-services/data-extraction" element={<DataExtraction />} />
        <Route path="/services/data-management-services/ecommerce-data-entry" element={<EcommerceDataEntry />} />
        <Route path="/services/data-management-services/data-processing" element={<DataProcessing />} />

         {/* Data Management */}  {/* Data Processing */}
        <Route path="/services/data-management-services/data-processing/data-collection" element={<DataCollectionServices />} />
        <Route path="/services/data-management-services/data-processing/data-dedulication" element={<DataDeduplicationServices />} />
        <Route path="/services/data-management-services/data-processing/data-modernization" element={<DataModernizationServices />} />
        <Route path="/services/data-management-services/data-processing/financial-data-processing" element={<FinancialDataProcessing />} />
        <Route path="/services/data-management-services/data-processing/forms-processing" element={<FormsProcessing />} />
        <Route path="/services/data-management-services/data-processing/survey-data" element={<SurveyDataProcessing />} />

        {/* Data Management */}  {/* Data Cleansing */}
         <Route path="/services/data-management-services/data-cleaning-services/data-clean-up" element={<DataCleanup />} />
         <Route path="/services/data-management-services/data-cleaning-services/data-validation" element={<DataValidationServices />} />
         <Route path="/services/data-management-services/data-cleaning-services/data-merging" element={<DataMergingServices />} />
         <Route path="/services/data-management-services/data-cleaning-services/data-enhancement" element={<DataEnhancementServices />} />
         <Route path="/services/data-management-services/data-cleaning-services/data-mining-services" element={<DataMiningServices />} />

         {/* Data Management */}  {/* Data Cleansing */} {/* Data Mining */}
        <Route path="/services/data-management-services/data-cleaning-services/data-mining-services/web" element={<WebDataMiningServices />} />
        <Route path="/services/data-management-services/data-cleaning-services/data-mining-services/sql" element={<SQLDataMining />} />
        <Route path="/services/data-management-services/data-cleaning-services/data-mining-services/image" element={<ImageDataMining />} />
        <Route path="/services/data-management-services/data-cleaning-services/data-mining-services/excel" element={<ExcelDataMining />} />
        <Route path="/services/data-management-services/data-cleaning-services/data-mining-services/word" element={<WordDataMining />} />
        <Route path="/services/data-management-services/data-cleaning-services/data-mining-services/pdf" element={<PDFDataMining />} />
        <Route path="/services/data-management-services/data-cleaning-services/data-mining-services/open-sources" element={<OpenSourceDataExtraction />} />

        {/* Careers */}
        <Route path="/careers" element={<Careers />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
