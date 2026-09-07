'use client';

import * as S from './styles';
import whatsapp from '@/assets/images/whatsapp.png';

export default function Contact() {
  return (
    <S.Section id="contato">
      <S.Container>
        <S.TopRow>
          <S.MainContact>
            <S.PreTitle>CONTATO</S.PreTitle>
            <S.Title>Estamos de portas abertas</S.Title>
            <S.Description>
              Será um prazer te receber em nossa igreja. Entre em contato, venha nos visitar e faça parte da nossa família.
            </S.Description>
            <S.WhatsAppButton href="https://wa.me/5512991904568" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp.src} alt="WhatsApp" />
              Fale conosco pelo WhatsApp
            </S.WhatsAppButton>
          </S.MainContact>

          <S.MapPlaceholder>
            <S.MapButton href="https://www.google.com/maps/search/?api=1&query=R.+Jo%C3%A3o+Freire+de+Menezes,+344+-+Parque+Meia+Lua,+Jacare%C3%AD+-+SP,+12335-130" target="_blank" rel="noopener noreferrer">
              Ver no Google Maps &rarr;
            </S.MapButton>
          </S.MapPlaceholder>
        </S.TopRow>

        <S.InfoRow>
          <S.InfoItem>
            <S.InfoIcon>📍</S.InfoIcon>
            <S.InfoContent>
              <S.InfoLabel>Endereço</S.InfoLabel>
              <S.InfoText>R. João Freire de Menezes, 344</S.InfoText>
              <S.InfoText>Parque Meia Lua — Jacareí/SP</S.InfoText>
              <S.InfoText>CEP 12335-130</S.InfoText>
            </S.InfoContent>
          </S.InfoItem>

          <S.InfoDivider />

          <S.InfoItem>
            <S.InfoIcon>
              <img src={whatsapp.src} alt="WhatsApp" />
            </S.InfoIcon>
            <S.InfoContent>
              <S.InfoLabel>WhatsApp</S.InfoLabel>
              <S.InfoText>(12) 99190-4568</S.InfoText>
              <S.WhatsAppLink href="https://wa.me/5512991904568" target="_blank" rel="noopener noreferrer">Fale conosco pelo WhatsApp</S.WhatsAppLink>
            </S.InfoContent>
          </S.InfoItem>

          <S.InfoDivider />

          <S.InfoItem>
            <S.InfoIcon>🕒</S.InfoIcon>
            <S.InfoContent>
              <S.InfoLabel>Horários dos cultos</S.InfoLabel>
              <S.InfoText>Domingo: EBD 9:00 CULTO 10:30</S.InfoText>
              <S.InfoText>Quarta-feira: 19h30</S.InfoText>
            </S.InfoContent>
          </S.InfoItem>
        </S.InfoRow>
      </S.Container>
    </S.Section>
  );
}
