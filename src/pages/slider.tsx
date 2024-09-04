import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import {
	Pagination,
	Navigation,
	Autoplay,
	EffectCube,
} from "swiper/modules";
import styled from "@emotion/styled";

export default function Swipe() {
	return (
		<>
			<Swiper
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				effect={"cube"}
				grabCursor={true}
				modules={[
					Pagination,
					Navigation,
					Autoplay,
					EffectCube,
				]}
				className="mySwiper w-[600px] h-[400px]"
				onSlideChange={() => console.log("Swiper change")}
			>
				<StyledSwiperSlide
					style={{
						background:
							"url(https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-lakescape-landscape-nature-scenery-hd-image_2950137.jpg)",
						backgroundSize: "cover",
					}}
				>
					<div
						className="title"
						data-swiper-parallax="-300"
					>
						Slide 1
					</div>
				</StyledSwiperSlide>
				<StyledSwiperSlide
					style={{
						background:
							"url(https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-nature-wallpapers-image_2683049.jpg)",
						backgroundSize: "cover",
					}}
				>
					<div
						className="title"
						data-swiper-parallax="-300"
					>
						Slide 2
					</div>
				</StyledSwiperSlide>
				<StyledSwiperSlide
					style={{
						background:
							"url(https://png.pngtree.com/thumb_back/fh260/background/20230521/pngtree-wallpaper-hd-nature-forest-lake-lake-in-autumn-image_2682116.jpg)",
						backgroundSize: "cover",
					}}
				>
					<div
						className="title"
						data-swiper-parallax="-300"
					>
						Slide 3
					</div>
				</StyledSwiperSlide>
			</Swiper>
		</>
	);
}

const StyledSwiperSlide = styled(SwiperSlide)`
	height: 400px;
	color: white;
	font-size: 30px;
	font-weight: 600;
	padding: 30px 40px;
	background-size: cover;
`;
