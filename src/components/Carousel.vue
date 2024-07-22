<template>
  <div class="carousel-wrapper h-96">
    <div class="carousel" ref="carousel">
      <div class="carousel-track" ref="carouselTrack">
        <div
          class="carousel-item"
          v-for="(image, index) in duplicatedImages"
          :key="index"
        >
          <img :src="image.src" :alt="image.alt" class="w-80" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "https://media.istockphoto.com/id/518025974/photo/young-female-with-clean-fresh-skin.jpg?s=612x612&w=0&k=20&c=_Rm_jw3auMYvP5TBeOht1K1vx7gz_1CCz357eZxjMeE=",
          alt: "Burger 1",
        },
        {
          src: "https://media.istockphoto.com/id/1356399752/photo/woman-during-biorevitalization-procedure-in-aesthetics-medical-clinic.jpg?s=612x612&w=0&k=20&c=pRQuFZeQamhM6b_Vtvne61AsjmBs_SczFJpgOliAu9c=",
          alt: "Burger 2",
        },
        {
          src: "https://media.istockphoto.com/id/1954263646/photo/close-up-fashion-portrait-of-young-woman-with-long-brunette-shiny-hair-looking-with-light.jpg?s=612x612&w=0&k=20&c=4PzAi8HM0iDGKYYKHGeD4usOkmyOo78jKgrpSJRaYmc=",
          alt: "Burger 3",
        },
        {
          src: "https://media.istockphoto.com/id/1311311676/photo/doctor-in-uniform-checking-up-female-patients-teeth-in-dental-clinic.jpg?s=612x612&w=0&k=20&c=6_U-_hP66MS4YvXsKSwBF73e9GjADKCb2Zc8N1QRE3I=",
          alt: "Burger 4",
        },
        {
          src: "https://media.istockphoto.com/id/487605544/photo/confident-female-doctor-posing-in-her-office.jpg?s=612x612&w=0&k=20&c=K6798oQdk2dKt-NwhWbyLZcJdBaXz49zQoxM_jd9B0c=",
          alt: "Burger 5",
        },
        {
          src: "https://media.istockphoto.com/id/952773360/photo/beautician-doing-laser-hair-removal-treatment-on-armpits.jpg?s=612x612&w=0&k=20&c=FwxjA10Z_FJ_vv0D1UrZLveX-vQ3yKv5wVSwtZYpMJk=",
          alt: "Burger 6",
        },
        {
          src: "https://media.istockphoto.com/id/1356435894/photo/woman-during-carbon-dioxide-laser-resurfacing-in-a-cosmetology-clinic.jpg?s=612x612&w=0&k=20&c=5H_GeUhj5a-2GOIs7Sx0HvQhdOK8pxkzIpDcva-ldaE=",
          alt: "Burger 7",
        },
      ],
      interval: null,
    };
  },
  computed: {
    duplicatedImages() {
      return [...this.images, ...this.images];
    },
  },
  mounted() {
    this.startAutoScroll();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startAutoScroll() {
      const track = this.$refs.carouselTrack;
      const carousel = this.$refs.carousel;
      const totalImages = this.images.length;

      this.interval = setInterval(() => {
        if (carousel.scrollLeft >= track.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
        carousel.scrollBy({
          left: track.children[0].offsetWidth,
          behavior: "smooth",
        });
      }, 2000);
    },
  },
};
</script>

<style scoped>
.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.carousel-track {
  display: flex;
  width: max-content;
}

.carousel-item {
  flex: none;
  scroll-snap-align: start;
}
</style>
