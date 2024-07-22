<template>
  <section
    :class="{
      'mt-5': true,
      'bg-[#0f172a]': !generalStore.isSun,
      'text-white': !generalStore.isSun,
      'mt-20': true,
    }"
  >
    <span class="ml-5 text-xl text-[#FE7865] font-bold" id="ourStory"
      >Our Story</span
    >

    <div class="card glass w-4/6 m-auto mt-5">
      <figure>
        <img
          class="w-full"
          src="@/../public/images/aboutUsPic.jpg"
          alt="car!"
        />
      </figure>

      <div class="card-body">
        <h2 class="card-title">About Our Services and Background</h2>
        <p class="text-justify">
          Our doctor appointment system is designed to streamline the process of
          scheduling appointments with doctors. We understand the importance of
          efficient and convenient healthcare services, and our goal is to
          provide patients with a user-friendly platform to book appointments
          with ease. Our system allows patients to search for doctors based on
          their specialty, location, and availability. Once a doctor is
          selected, patients can choose a suitable date and time for their
          appointment. Additionally, our system provides reminders and
          notifications to ensure that patients never miss their appointments.
          We are committed to improving the healthcare experience for both
          patients and doctors through our innovative appointment system.
        </p>
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Total Likes</div>
            <div class="stat-value text-primary">25.6K</div>
            <div class="stat-desc">21% more than last month</div>
          </div>

          <div class="stat">
            <div class="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">Page Views</div>
            <div class="stat-value text-secondary">2.6M</div>
            <div class="stat-desc">21% more than last month</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import useGeneralStore from "@/generalStore.js";
export default {
  data() {
    return {
      generalStore: useGeneralStore(),
    };
  },
};
</script>

<style scoped>
#ourStory {
  position: relative;
  padding-left: 370px;
}

#ourStory:before {
  content: "";
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 300px;
  height: 2px;
  background: #fe7865;
  transform: translateY(50%);
}
</style>
