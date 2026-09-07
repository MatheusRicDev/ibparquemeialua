'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cbcInfo, cbcInitiatives, cbcGallery } from '@/data/cbc';
import cbc1 from '@/assets/images/cbc1.jpeg';
import cbc2 from '@/assets/images/cbc2.jpeg';
import cbc3 from '@/assets/images/cbc3.jpeg';
import cbc4 from '@/assets/images/cbc4.jpeg';
import cbc5 from '@/assets/images/cbc5.jpeg';

import {
  PageContainer,
  HeroSection,
  HeroContent,
  HeroText,
  PreTitle,
  HeroTitle,
  HeroSubtitle,
  Main,
  ContentSection,
  ContentContainer,
  TwoColumnLayout,
  TextColumn,
  ImageColumn,
  SectionLabel,
  SectionTitle,
  SectionText,
  ImageContainer,
  PurposeSection,
  PurposeContainer,
  QuoteText,
  InitiativesSection,
  InitiativesContainer,
  InitiativesHeader,
  InitiativesGrid,
  InitiativeCard,
  InitiativeIcon,
  InitiativeTitle,
  InitiativeDescription,
  GallerySection,
  GalleryContainer,
  GalleryHeader,
  GalleryGrid,
  GalleryItem,
  HighlightSection,
  HighlightContainer,
  HighlightTitle,
  HighlightText,
  CTASection,
  CTAContainer,
  CTATitle,
  CTAText,
  CTAButton,
  BackBar,
  BackBarInner,
  BackLink,
} from './styles';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'Heart':
      return '❤️';
    case 'Book':
      return '📖';
    case 'Users':
      return '👥';
    case 'Mic':
      return '🎤';
    default:
      return '📖';
  }
};

export default function CBCPage() {
  return (
    <PageContainer>
      <Header />
      <BackBar>
        <BackBarInner>
          <BackLink href="/">&larr; Voltar para a página inicial</BackLink>
        </BackBarInner>
      </BackBar>
      <Main>
        <HeroSection>
          <HeroContent>
            <HeroText>
              <PreTitle>{cbcInfo.label}</PreTitle>
              <HeroTitle>{cbcInfo.title}</HeroTitle>
              <HeroSubtitle>{cbcInfo.subtitle}</HeroSubtitle>
            </HeroText>
          </HeroContent>
        </HeroSection>

        <ContentSection>
          <ContentContainer>
            <TwoColumnLayout>
              <TextColumn>
                <SectionLabel>O CENTRO BÍBLICO COMUNITÁRIO</SectionLabel>
                <SectionTitle>O que é o CBC?</SectionTitle>
                <SectionText>{cbcInfo.about}</SectionText>
              </TextColumn>
              <ImageColumn>
                <ImageContainer>
                  <img src={cbc2.src} alt="Centro Bíblico Comunitário" />
                </ImageContainer>
              </ImageColumn>
            </TwoColumnLayout>
          </ContentContainer>
        </ContentSection>

        <PurposeSection>
          <PurposeContainer>
            <SectionLabel style={{ justifyContent: 'center' }}>NOSSO PROPÓSITO</SectionLabel>
            <SectionTitle style={{ textAlign: 'center' }}>Nosso propósito</SectionTitle>
            <QuoteText>&ldquo;{cbcInfo.highlightQuote}&rdquo;</QuoteText>
            <SectionText style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              {cbcInfo.purposeText}
            </SectionText>
          </PurposeContainer>
        </PurposeSection>

        <InitiativesSection>
          <InitiativesContainer>
            <InitiativesHeader>
              <SectionLabel style={{ justifyContent: 'center' }}>NOSSAS INICIATIVAS</SectionLabel>
              <SectionTitle>Nossas iniciativas</SectionTitle>
            </InitiativesHeader>
            <InitiativesGrid>
              {cbcInitiatives.map((initiative) => (
                <InitiativeCard key={initiative.id}>
                  <InitiativeIcon>{getIcon(initiative.icon)}</InitiativeIcon>
                  <InitiativeTitle>{initiative.title}</InitiativeTitle>
                  <InitiativeDescription>{initiative.description}</InitiativeDescription>
                </InitiativeCard>
              ))}
            </InitiativesGrid>
          </InitiativesContainer>
        </InitiativesSection>

        <GallerySection>
          <GalleryContainer>
            <GalleryHeader>
              <SectionLabel style={{ justifyContent: 'center' }}>MOMENTOS DO CBC</SectionLabel>
              <SectionTitle>Vivendo em comunidade</SectionTitle>
            </GalleryHeader>
            <GalleryGrid>
              {cbcGallery.map((photo, index) => {
                const images = [cbc3, cbc4, cbc5, cbc2, cbc1];
                const img = images[index % images.length];
                return (
                  <GalleryItem key={photo.id} $size={photo.size as 'large' | 'medium' | 'small'}>
                    <img src={img.src} alt={photo.alt} />
                  </GalleryItem>
                );
              })}
            </GalleryGrid>
          </GalleryContainer>
        </GallerySection>

        <HighlightSection>
          <HighlightContainer>
            <HighlightTitle>{cbcInfo.highlightQuote}</HighlightTitle>
            <HighlightText>{cbcInfo.highlightDescription}</HighlightText>
          </HighlightContainer>
        </HighlightSection>

        <CTASection>
          <CTAContainer>
            <CTATitle>{cbcInfo.ctaTitle}</CTATitle>
            <CTAText>{cbcInfo.ctaDescription}</CTAText>
            <CTAButton href="https://wa.me/5512991904568" target="_blank" rel="noopener noreferrer">{cbcInfo.ctaButton} &rarr;</CTAButton>
          </CTAContainer>
        </CTASection>
      </Main>
      <Footer />
    </PageContainer>
  );
}
