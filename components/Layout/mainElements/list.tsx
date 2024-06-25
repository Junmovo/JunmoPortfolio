import Link from 'next/link';
import * as S from '@/styles/ListStyles';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
// import Listimg from '@/';

export default function List(): JSX.Element {
  return (
    <>
      <S.ListWrapper>
        <h1 className="text-[64px] font-[800]">만나서 반가워</h1>
        <p>기타등등 얘기</p>
        <S.ListInner>
          <S.StyledSwiper
            spaceBetween={30}
            slidesPerView={1}
            initialSlide={1}
            centeredSlides={true}
            // loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <S.List href="PageDetail/MusicApp" scroll={true}>
                <S.ListTag>React</S.ListTag>
                <S.ListImgWrap>{/* <Image src={Listimg} alt="임시" /> */}</S.ListImgWrap>
                <S.ListContentsWrap>
                  <S.ListTitle>제목입니다.</S.ListTitle>
                  <S.ListContents>내용입니다.</S.ListContents>
                </S.ListContentsWrap>
              </S.List>
            </SwiperSlide>
            <SwiperSlide>
              <S.List href="PageDetail/LostArk" scroll={true}>
                <S.ListTag>React</S.ListTag>
                <S.ListImgWrap>{/* <Image src={Listimg} alt="임시" /> */}</S.ListImgWrap>
                <S.ListContentsWrap>
                  <S.ListTitle>로스트아크.</S.ListTitle>
                  <S.ListContents>도전~</S.ListContents>
                </S.ListContentsWrap>
              </S.List>
            </SwiperSlide>
          </S.StyledSwiper>
        </S.ListInner>
      </S.ListWrapper>
    </>
  );
}
