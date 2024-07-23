<template>
  <div
    :class="{
      navbar: true,
      'w-4/5': true,
      'md:w-full': true,
      'm-auto': true,
      fixed: true,
      'top-0': true,
      'border-b-1': true,
      'shadow-xl': true,
      'z-10': true,

      'bg-white': generalStore.isSun,
      'bg-[#0f172a]': !generalStore.isSun,
    }"
    ref="navbar"
  >
    <div class="navbar-start pl-10">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="strokeColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          :class="{
            menu: true,
            'menu-sm': true,
            'dropdown-content': true,
            'bg-base-100': generalStore.isSun,
            'rounded-box': true,
            'z-[1]': true,
            'mt-3': true,
            'w-52': true,
            'p-2': true,
            shadow: true,
            'bg-[#0f172a]': !generalStore.isSun,
            'text-white': !generalStore.isSun,
          }"
        >
          <li v-for="(value, key) in menuBtns" :key="key">
            <a
              @click="scrollToSection(key)"
              :class="{
                'hover:text-red-400': !generalStore.isSun,
                'text-lg': true,
              }"
              >{{ value }}</a
            >
          </li>
          <li>
            <a
              href="http://localhost:8000/login.php"
              target="_blank"
              :class="{
                'hover:text-red-400': !generalStore.isSun,
                'text-lg': true,
              }"
              >Book Appointment</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <div
        class="w-full h-full flex justify-center items-center font-semibold btn-ghost bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
      >
        <h1 id="typewriter" class="text-5xl font-bold">{{ displayedText }}</h1>
      </div>
    </div>
    <div class="navbar-end flex justify-end items-center pr-10">
      <div class="">
        <input
          @keyup.enter="handleEnter"
          @focus="selectAllText"
          v-model="generalStore.searchInputValue"
          type="text"
          placeholder="Type here"
          class="input input-bordered input-info w-full max-w-xs"
        />

        <div
          v-show="generalStore.isDropdownOpen"
          ref="dropdown"
          class="bg-[#0F172A] absolute z-50 w-64 mt-1 rounded-lg overflow-y-scroll min-h-0 max-h-80 no-scrollbar"
        >
          <SuggestItem
            v-for="(searchRes, index) in search"
            :key="index"
            :searchRes="searchRes"
          />
        </div>
      </div>

      <router-link
        :to="passToSearchRoute"
        class="btn btn-ghost btn-circle"
        @click="searchIng"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          :stroke="strokeColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </router-link>

      <label class="swap swap-rotate">
        <!-- sun icon -->
        <svg
          @click="generalStore.changeToMoon"
          v-if="generalStore.isSun"
          class="h-7 w-7 fill-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            class="fill-black"
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          @click="generalStore.changeToSun"
          v-else
          class="h-7 w-7 fill-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            class="fill-white"
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>
    </div>
  </div>
</template>
<script>
import useGeneralStore from "@/generalStore.js";
import SuggestItem from "@/components/SuggestItem.vue";
export default {
  data() {
    return {
      menuBtns: {
        treatments: "Treatments",
        about: "About us",
        team: "Team",
        blogs: "Blogs",
        contact: "Contact",
      },
      generalStore: useGeneralStore(),
      words: ["Welcome to", "LUXURY AESTHETIC", "online clinic systen"],
      i: 0,
      j: 0,
      currentWord: "",
      isDeleting: false,
      displayedText: "",
    };
  },

  computed: {
    passToSearchRoute() {
      return this.generalStore.searchInputValue === "" ? "#" : "/search";
    },
    strokeColor() {
      return this.generalStore.isSun ? "currentColor" : "white";
    },

    search() {
      if (this.generalStore.searchInputValue.length >= 1) {
        const s = this.generalStore.searchInputValue.toLowerCase();
        const found = this.generalStore.treatments.filter((item) => {
          const result = item.title.toLowerCase().includes(s);

          return result;
        });
        found.length > 1
          ? (this.generalStore.isDropdownOpen = true)
          : (this.generalStore.isDropdownOpen = false);
        return found;
      } else {
        this.generalStore.isDropdownOpen = false;
      }
    },
  },
  components: {
    SuggestItem,
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
    this.type();
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  emits: ["scroll"],
  methods: {
    scrollToSection(section) {
      this.$emit("scroll", section);
    },

    handleClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.generalStore.isDropdownOpen = false;
      }
    },

    searchIng() {
      if (this.generalStore.searchInputValue === "") {
        return;
      } else {
        const s = this.generalStore.searchInputValue.toLowerCase();
        const found = this.generalStore.treatments.filter((item) => {
          const result = item.title.toLowerCase().includes(s);
          return result;
        });
        this.generalStore.updateSearchArr(found);
        this.generalStore.isDropdownOpen = false;
      }
    },

    selectAllText(event) {
      event.target.select();
    },

    handleEnter() {
      if (this.generalStore.searchInputValue === "") {
        return;
      } else {
        this.searchIng();
        this.$router.push(`/search`);
        this.generalStore.isDropdownOpen = false;
      }
    },

    type() {
      this.currentWord = this.words[this.i];
      if (this.isDeleting) {
        this.displayedText = this.currentWord.substring(0, this.j - 1);
        this.j--;
        if (this.j == 0) {
          this.isDeleting = false;
          this.i++;
          if (this.i == this.words.length) {
            this.i = 0;
          }
        }
      } else {
        this.displayedText = this.currentWord.substring(0, this.j + 1);
        this.j++;
        if (this.j == this.currentWord.length) {
          this.isDeleting = true;
        }
      }
      setTimeout(this.type, 150);
    },
  },
};
</script>
